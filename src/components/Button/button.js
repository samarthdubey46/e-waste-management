import React, { Component } from "react";
import Styles from "./style";
import { Text, View, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";

const Button = ({ textStyle = {}, onPress, loading = false, viewStyle = {}, children, noTextStyle = false,noViewStyle = false }) => {
  return (
    <TouchableOpacity onPress={async () => await onPress()} >
      {loading ? (<ActivityIndicator color="white" size='large' />)
        : (<View style={[noViewStyle ? {} : Styles.viewStyle, viewStyle]}>
          <Text style={[noTextStyle ? {} : Styles.textStyle, textStyle]}>
            {children}
          </Text>
        </View>)}
    </TouchableOpacity>
  )
}


export default Button