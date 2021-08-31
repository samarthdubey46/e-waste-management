import React, {useEffect, useRef, useState} from 'react'
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import BlogNavigationButton from '../../components/Button/blogNavigation'
import {Title} from '../../components/Typography'
import {color, layout} from '../../const'
import {SIngleBlog} from "../../API/blogs";
import {useSelector} from "react-redux";
import LoadingScreen from "../Loading";


const top = (ref) => {
    ref.current?.scrollTo({
        y: 0,
        x :0,
        animated: true,
    });
}

const SingleBlog = ({navigation, route}) => {
    const token = useSelector(state => state.auth.TOKEN)
    const [loading, setLoading] = useState(false);

    const [nextLoading, setNextLoading] = useState(true);
    const [prevLoading, setPrevLoading] = useState(false);

    const {params: {list}} = route
    const [blog, setBlog] = useState({})
    const [writtenBy, setWrittenBy] = useState({name: ''})

    const [id, setId] = useState(route.params.id)
    const [index, setIndex] = useState(route.params.index)

    const ref = useRef()
    const [prev, setPrev] = useState(null)
    const [next, setNext] = useState(null)

    const getData = async (id_ = id) => {
        try {
            let res;
            res = await SIngleBlog(id_, token)
            if (res.status !== 'OK')
                res = await SIngleBlog(id_, token)
            if (res.status === 'OK') {
                setBlog(res.data)
                if ('writtenBy' in res.data) {
                    if ('username' in res.data.writtenBy) {
                        setWrittenBy({name: res.data.writtenBy.username})
                    }
                }
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        setId(list[index])
        setPrev(index === 0 ? null : list[index - 1])
        setNext(index === list.length - 1 ? null : list[index + 1])
    }, [index]);


    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                setPrevLoading(false)
                setNextLoading(false)
                await getData(id)
                setLoading(false)
            } catch (e) {
                console.log(e)
            }
        })()
    }, []);

    const prevBlog = async () => {
        setPrevLoading(true)
        await getData(prev)
        setIndex(prev => prev - 1)
        setPrevLoading(false)
        // top(ref)
    }

    const nextBlog = async () => {
        setNextLoading(true)
        await getData(next)
        setIndex(prev => prev + 1)
        setNextLoading(false)
        // top(ref)
    }

    if (loading)
        return <LoadingScreen/>

    return (
        <ScrollView onContentSizeChange={() => top(ref)} ref={ref} style={{flex: 1,}}>
            <View style={styles.container}>
                <View >
                    <Image style={{width:'100%',marginBottom:20,height:200}} source={{uri:blog.image}}/>
                </View>
                <View style={{marginBottom: 20}}>
                    <Title style={styles.text}>{blog.title}</Title>
                </View>
                <Text style={[styles.text, {marginBottom: 10,}]}>{blog.description}</Text>
                <View style={{marginBottom: 20, alignItems: 'flex-end'}}>
                    <Text style={{}}>~{writtenBy.name}</Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <BlogNavigationButton onPress={async () => await prevBlog()} disabled={prev === null}
                                          loading={prevLoading} text="Prev"/>
                    <BlogNavigationButton onPress={async () => await nextBlog()} disabled={next === null}
                                          loading={nextLoading} text="Next"/>
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 30, paddingHorizontal: 15},
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})
export default SingleBlog