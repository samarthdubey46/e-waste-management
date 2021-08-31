import React, {useEffect, useState} from 'react'
import {ActivityIndicator, FlatList, RefreshControl, ScrollView, StyleSheet, ToastAndroid, View} from 'react-native'
import {color} from "../../const";
import {BarChart} from "react-native-svg-charts";
import {Title} from "../../components/Typography";
import Counter from "../../components/Counter";
import BlogNavigationButton from "../../components/Button/blogNavigation";
import ComplaintList from "../../components/ComplaintList";
import {useDispatch, useSelector} from "react-redux";
import {COmplaints} from "../../API/complaints";
import {setReload} from "../../redux/actions/auth";

const completed = 'rgb(0, 160, 54)'
const pending = 'rgb(252,95,95)';
const progress = 'rgb(255,232,0)';

const colors = [pending, progress, completed]

const setListWithColors = (list) => {
    return list.map((item, index) => ({
        value: item,
        svg: {fill: colors[index]}
    }))
}

const Complaints = ({navigation, route}) => {
    const token = useSelector(state => state.auth.TOKEN)
    const isLogged = useSelector(state => state.auth.ISLOGGED)
    const reload = useSelector(state => state.auth.SHOULD_RELOAD)
    const dispatch = useDispatch()

    const [data, setData] = useState([])
    const [counterLoading, setCounterLoading] = useState(false);
    const [loading, setLoading] = useState(false);
    const [counterData, setCounterData] = useState([15, 4, 7]);
    const [refresh,setRefresh] = useState(false)

    const getData = async () => {
        setCounterLoading(true)
        const counter_res = await COmplaints(token, true)
        if (counter_res.status === 'OK')
            setCounterData(Object.values(counter_res.data))
        setCounterLoading(false)
        if (isLogged) {
            setLoading(true)
            const data_res = await COmplaints(token)
            if (data_res.status === 'OK')
                setData(data_res.data)
            setLoading(false)
        }
    }

    useEffect(() => {
        (async () => {
            console.log(reload)
            if (reload === 'complaints') {
                await getData()
                ToastAndroid.show('Your Complaint was registered successfully', 1500)
                dispatch(setReload(false))
            }
        })()

    }, [reload]);


    useEffect(() => {
        (async () => {
            if (reload !== 'complaints') {
                await getData()
            }
        })()
    }, [])

    const navigate = () => {
        navigation.navigate('AddComplaint', {title: ''})
    }
    return (
        <View style={[styles.container, {marginBottom: 0}]}>
            <View style={{minHeight: 160,}}>
                <ScrollView refreshControl={<RefreshControl onRefresh={async () => {
                    setRefresh(true)
                    await getData()
                    setRefresh(false)
                }} refreshing={refresh}/>} contentContainerStyle={{
                    justifyContent: 'space-between', alignItems: 'center',
                    flexDirection: 'row',
                }} scrollEnabled={false}>
                    <Counter value={counterData[0]} fill={pending} caption={'Pending'}/>
                    <Counter value={counterData[1]} fill={progress} caption={'In Progress'}/>
                    <Counter value={counterData[2]} fill={completed} caption={'Completed'}/>

                </ScrollView>
                {counterLoading ? (<ActivityIndicator style={{height: 100}} size='large' color="black"/>) :
                    <BarChart style={{height: 100, marginBottom: 15}} horizontal
                              data={setListWithColors(counterData)} showGrid={false} svg={{completed}}
                              yAccessor={({item}) => item.value}
                              contentInset={{top: 20, left: 30, right: 50, bottom: 20}}
                              spacingInner={.0}
                    />}
            </View>
            <View style={{flex: 1, marginBottom: 20}}>
                <View style={{
                    marginBottom: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Title style={{fontSize: 18}}>Your Complaints</Title>
                    <BlogNavigationButton disabled={!isLogged} onPress={navigate}
                                          viewStyle={{minWidth: 130, height: 20}}
                                          text='Add Complaint'/>
                </View>
                {loading ? (<ActivityIndicator size='large' color="black"/>) :
                    isLogged ? (
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({item, index}) => <ComplaintList item={item}/>}
                            />
                        ) :
                        <View style={{flex: .2, justifyContent: 'center', alignItems: 'center'}}>
                            <Title>You need to Login First </Title>
                        </View>
                }
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 30, paddingHorizontal: 15, flex: 1},
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})
export default Complaints