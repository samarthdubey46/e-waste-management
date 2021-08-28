import React, { Component } from "react";
import Styles from "./style";
import { TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import { layout, themeColor } from "../../const";
import { Title } from "../Typography";
import colors from "../../const/colors";

const RoundButton = ({ loading = false, text = '', buttonStyle = {}, textStyle = {}, onPress }) => {
  return (
    <TouchableOpacity onPress={async () => {
      if(!loading)
        await onPress()
      }} style={[styles.roundView, buttonStyle]}>
      {loading ? (<ActivityIndicator color="white" size='large' />)
        : (<Title style={[styles.titleStyle, text]}>{text}</Title>)}
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  titleStyle: { fontSize: 20, color: colors.white, fontWeight: '800' },
  roundView: {
    width: layout.width / 1.3, minHeight: 65, borderTopRightRadius: 50,
    borderBottomRightRadius: 50, alignItems: 'center', justifyContent: 'center'
    , backgroundColor: themeColor, elevation: 15,
  },
})

export default RoundButton