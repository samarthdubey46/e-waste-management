import React, { useEffect, useState } from "react";
import {
  View,
  TextInput as Textinput,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { layout } from "../../const";
import colors from "../../const/colors";
import { Caption, Title } from "../Typography";
import Style from './style';
const TextInput = ({ holder, value, setValue, placeHolder, secureTextEntry = false, props = {}, style = {}, error = false }) => {
  return (
    <View style={[style, error ? { borderWidth: 1, borderColor: colors.red } : {}]}>
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
export const RoundTextInput = ({ error = false, titleStyle = {}, viewStyle = {}, insideViewStyle = {}, holder = '', value, setValue, placeHolder = '', secureTextEntry = false, props = {}, style = {} }) => {
  return (
    <View style={[{ minHeight: 85, marginVertical: 5 }, viewStyle]}>
      <Title style={[styles.titleStyle, titleStyle]}>{holder}</Title>
      <View style={[styles.roundView, !error ? {} : styles.errorView]}>
        <Textinput
          value={value}
          style={[{ flex: 1, paddingHorizontal: 24 }, style]}
          onChangeText={(t) => setValue(t)}
          placeholder={placeHolder}
          {...props}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error && <View style={{ alignItems: 'flex-end', marginHorizontal: 15 }}>
        <Caption style={{ color: colors.red }}>Enter Valid {placeHolder}</Caption>
      </View>}
    </View>
  )
}
export default TextInput

const styles = StyleSheet.create({
  errorView: { borderWidth: .4, borderColor: colors.red },
  titleStyle: { fontSize: 18, paddingHorizontal: 20 },
  roundView: {
    width: layout.width / 1.3, minHeight: 65, borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50, alignItems: 'stretch', justifyContent: 'center'
    , backgroundColor: 'white', elevation: 15, marginVertical: 5,
  },
})