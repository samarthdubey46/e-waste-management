import React, { useEffect, useState } from "react";
import {
  View,
  TextInput as Textinput,
  Text,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Caption, Title } from "../Typography";
import Style from './style';
const TextInput = ({ holder, value, setValue, placeHolder, secureTextEntry = false,props = {},style = {}}) => {
  return (
    <View style={[{},style]}>
      {holder && <Text style={Style.text}>{holder}</Text>}
      <Textinput
        style={Style.textViewContainer}
        value={value}
        onChangeText={(text) => {
          setValue(text)
        }}
        {...props}
        placeholder={placeHolder}
        placeholderTextColor='#A0A0A0'
        underlineColorAndroid="transparent"
        secureTextEntry={secureTextEntry}
      />
    </View>
  )
}
export default TextInput