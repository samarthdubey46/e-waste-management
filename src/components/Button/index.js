import React, { Component } from "react";
import Styles from "./style";
import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";

const Button = ({ textStyle = {}, onPress, loading = false,viewStyle = {},children }) => {
  return (
    <TouchableOpacity onPress={async () => await onPress()} >
      {loading ? (<ActivityIndicator color="white" size='large' />)
        : (<View style={[Styles.viewStyle, viewStyle]}>
          <Text style={[Styles.textStyle, textStyle]}>
            {children}
          </Text>
        </View>)}
    </TouchableOpacity>
  )
}
export default Button