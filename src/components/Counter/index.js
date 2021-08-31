import {Caption} from "../Typography";
import {View} from "react-native";
import React from "react";

const Counter = ({caption = '', value = '', fill, captionStyle = {}, valueStyle = {}, viewStyle = {}, size = 8}) => (
    <View style={[{minHeight: 90, justifyContent: 'center', alignItems: 'center'}, viewStyle]}>
        <Caption style={[{fontSize: 16}, captionStyle]}>{caption}</Caption>
        <Caption style={[{fontSize: 30,marginVertical:8}, valueStyle]}>{value}</Caption>
        <View style={{width: size, height: size, backgroundColor: fill}}/>
    </View>
)
export default Counter
