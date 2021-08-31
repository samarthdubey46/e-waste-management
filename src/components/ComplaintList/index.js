import React, {useEffect, useState} from 'react';
import {months} from "../../const";
import {ImageBackground, Text, View} from "react-native";
import {Entypo, Feather, MaterialIcons} from "@expo/vector-icons";
import {Caption} from "../Typography";


const completed = 'rgb(0, 160, 54)'
const pending = 'rgb(46,215,193)';
const progress = 'rgb(218,142,61)';


const RowItem = ({Icon, value}) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center", marginRight: 20}}>
            <Icon/>
            <Caption style={{marginLeft: 5}}>{value}</Caption>
        </View>);
}

const ComplaintList = ({item}) => {
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [color, setColor] = useState(pending)
    useEffect(() => {
        let color;
        let createdAt = new Date(item.created_at)
        switch (item.status) {
            case "Pending":
                color = pending
                break
            case "In Progress":
                color = progress
                break
            case "Completed":
                color = completed
                break
        }
        setColor(color)
        setDay(createdAt.getDate())
        setMonth(months[createdAt.getMonth()])
    }, []);
    return (
        <View style={{
            flexDirection: 'row', marginVertical: 10,
            minHeight: 100,
        }}>
            <View style={{flex: .35, flexDirection: 'row'}}>
                <ImageBackground resizeMode="stretch" style={{flex: .86, height: 90}}
                                 source={{uri: item.image}}/>
            </View>
            <View style={{flex: .73,}}>
                <Text numberOfLines={2} style={{
                    fontSize: 16,
                    fontWeight: '900',
                    marginBottom: 15
                }}>{item.title}</Text>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <RowItem
                        Icon={() => <Feather style={{opacity: .8}} name="calendar"
                                            size={18}
                                            color="black"/>} value={day + ' ' + month}/>
                    <RowItem
                        Icon={() => <Feather style={{opacity: .8}} name="clock"
                                                   size={18}
                                                   color="black"/>} value={item.status}/>
                </View>
            </View>
        </View>
    )
};

export default ComplaintList;
