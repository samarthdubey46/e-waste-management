
import { Ionicons, MaterialCommunityIcons, Octicons } from '@expo/vector-icons'
import React from 'react'
import { View, Button, Text, FlatList, Dimensions, Pressable } from 'react-native'
import Icon from './iconByName'

const CircleIcon = ({
    iconName,
    width = 40,
    size,
    BackColor = 'rgba(255, 126, 117,.2)',
    color,
    style,
    Text_ = null,
    textStyle = {},
    outerStyle = {},
    noText = false
}) => {
    return (
        <View style={[{ flexDirection: 'row', alignItems: 'center' },outerStyle]}>
            <View style={[{
                width: width,
                height: width,
                borderRadius: width / 2,
                backgroundColor: BackColor,
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: 14,
            }, style]}>
                <Icon color={color} size={size} name={iconName} />
            </View>
            {!noText && Text_ !== null ? typeof Text_ === 'string' ? (<Text style={[{ marginRight: 25, fontSize: 19, opacity: .8,},textStyle]}>{Text_}</Text>) : <Text_ /> : <></>}

        </View>

    )
}
export default CircleIcon
