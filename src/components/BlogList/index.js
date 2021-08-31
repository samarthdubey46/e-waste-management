import React, {useEffect, useState} from 'react';
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {Caption} from "../Typography";
import {months} from "../../const";

const BlogListComponent = ({item, navigation, list, index}) => {
    const navigateToSingleBlog = () => {
        navigation.navigate('SingleBlog', {
            blog: item,
            id: item.id,
            list,
            index,
            title: ''
        })
    }
    const [writtenOn, setWrittenOn] = useState('Aug 31, 2021')
    useEffect(() => {
        try {
            let date = new Date(item.writtenOn)
            let month = months[date.getMonth()]
            const day = date.getDay()
            const year = date.getFullYear()
            setWrittenOn(`${month} ${day} ${year}`)
        } catch (e) {
            console.log(e)
        }
    }, []);

    return (
        <View style={{
            flexDirection: 'row', marginVertical: 10,
            minHeight: 120,
        }}>
            <View style={{flex: .35, flexDirection: 'row', marginRight: 10}}>
                <TouchableOpacity style={{flex: 1, height: 110}} onPress={() => navigateToSingleBlog(item)}>
                    <ImageBackground resizeMode="stretch" style={{flex: 1, height: 110}} source={{uri: item.image}}/>
                </TouchableOpacity>
            </View>
            <View style={{flex: .64,}}>
                <TouchableOpacity onPress={() => navigateToSingleBlog(item)} style={{flex: .6,}}>
                    <Text numberOfLines={3}
                          style={{fontSize: 16, fontWeight: '900', lineHeight: 21}}>{item.title}</Text>
                </TouchableOpacity>
                <View style={{flex: .3, justifyContent: 'center',}}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Caption style={{fontSize: 12}}>{writtenOn}</Caption>
                        <Caption style={{fontSize: 12}}>◉ {item.readTime}</Caption>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default BlogListComponent;
