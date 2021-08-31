import React, {useEffect, useState} from 'react'
import {FlatList, RefreshControl, ScrollView, StyleSheet, View} from 'react-native'
import {Caption} from '../../components/Typography'
import {color} from '../../const/index'
import BlogListComponent from "../../components/BlogList";
import {useSelector} from "react-redux";
import {BLogs} from "../../API/blogs";
import LoadingScreen from "../Loading";

const Home = ({navigation, route}) => {
    const token = useSelector(state => state.auth.TOKEN)
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [refreshing, setRefreshing] = useState(false);
    const getData = async () => {
        let res = await BLogs(token)
        if (res.status !== 'OK')
            res = await BLogs(token)
        if (res.status === 'OK') {
            setData(res.data)
        }
    }
    useEffect(() => {
        (async () => {
            setLoading(true)
            await getData()
            setLoading(false)

        })()
    }, []);
    if (loading) {
        return <LoadingScreen/>
    }
    return (
        <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={async () => {
            setRefreshing(true)
            await getData()
            setRefreshing(false)
        }}/>} style={{flex: 1, backgroundColor: color.white}}>
            {/*<Button title={'as'} o1nPress={async () => console.log(await state)}/>*/}
            <View style={{flex: 1, backgroundColor: color.white, paddingVertical: 20, paddingHorizontal: 15}}>
                <View style={{marginBottom: 25,}}>
                    <Caption style={styles.greeting}>Good morning</Caption>
                </View>
                <View style={{flex: 1}}>
                    {/* <Title style={{ fontSize: 14 }}>Blogs</Title> */}
                    <FlatList
                        data={data}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item, index}) => <BlogListComponent index={index} list={data.map(item => item.id)}
                                                                          item={item} navigation={navigation}/>}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    greeting: {fontSize: 16, marginBottom: 10}
})
export default Home