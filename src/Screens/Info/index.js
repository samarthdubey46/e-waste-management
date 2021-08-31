import React from 'react'
import {Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {color} from "../../const";
import {Caption} from "../../components/Typography";
import {AntDesign} from "@expo/vector-icons";
import {data} from "./data.json";


const Info = ({navigation, route}) => {
    const {data} = require('./data.json')
    const navigate = (item) => {
        navigation.navigate('SingleGuide', {data: item, title: item.title})
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => {
                    return (
                        <View style={{
                            minHeight: 100,
                            marginVertical: 20,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <TouchableOpacity onPress={() => navigate(item)} style={{flex: .3, flexDirection: 'row'}}>
                                <Image height={100} style={{borderRadius: 10, flex: .9, height: 100}}
                                       source={{uri: item.image}}/>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate(item)}
                                              style={{flex: .6, justifyContent: 'center',}}>
                                <Text numberOfLines={2} style={{fontSize: 16}}>{item.title}</Text>
                                <Caption>{item.category}</Caption>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigate(item)} style={{
                                flex: .1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <AntDesign name="right" size={22} color="black"/>
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 30, paddingHorizontal: 15, flex: 1},
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})
export default Info