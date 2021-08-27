import {
    AntDesign,
    Entypo,
    EvilIcons,
    Feather,
    FontAwesome,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons
} from '@expo/vector-icons'
import React from 'react'
import {View, Button, Text, FlatList, Dimensions} from 'react-native'

const Icon = ({name, size = 27, color}) => {
    switch (name) {
        case "clipboard-check-outline":
            return <MaterialCommunityIcons name="clipboard-check-outline" size={27} color="#de8c04"/>
            break
        case "ios-laptop":
            return <Ionicons name="ios-laptop" size={27} color="#de8c04"/>
        case "whistle":
            return <MaterialCommunityIcons name="whistle" size={27} color="#de8c04"/>
        case "filter":
            return <AntDesign name="filter" size={size} color="#00a4e6"/>
        case "search":
            return <EvilIcons name={name} size={size} color={color}/>
        case "add":
            return <Entypo name='plus' size={size} color={color}/>
        case "user-plus":
            return <Feather name="user-plus" size={size} color={color}/>
        case "brush":
            return <MaterialCommunityIcons name="fountain-pen-tip" size={size} color={color}/>
        case "users":
            return <Feather name="users" size={size} color={color}  />
        case "user":
            return <Feather name="user" size={size} color={color}  />
        case "wifi-off":
            return <Feather name="wifi-off" size={size} color={color}  />
        case "wifi":
            return <Feather name="wifi" size={size} color={color}  />
        case "device":
            return <MaterialIcons name="devices" size={size} color={color}  />
        case "handshake":
            return <FontAwesome5 name="handshake" size={size} color={color}  />
        case "battery":
            return <FontAwesome name="battery-full" size={size} color={color}  />
        case "battery-3":
            return <FontAwesome name="battery-3" size={size} color={color}  />
        case "battery-1":
            return <FontAwesome name="battery-1" size={size} color={color}  />

        case "signal-cellular-1":
            return <MaterialCommunityIcons name="signal-cellular-1" size={size} color={color}  />
        case "signal-cellular-2":
            return <MaterialCommunityIcons name="signal-cellular-2" size={size} color={color}  />
        case "signal-cellular-3":
            return <MaterialCommunityIcons name="signal-cellular-3" size={size} color={color}  />
            
    
    }
}
// filter
export default Icon
// color="#ff1100"