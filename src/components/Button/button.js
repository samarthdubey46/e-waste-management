import React from "react";
import Styles from "./style";
import {ActivityIndicator, Text, TouchableOpacity, View} from "react-native";

const Button = ({
                    textStyle = {},
                    onPress,
                    loading = false,
                    viewStyle = {},
                    children,
                    noTextStyle = false,
                    noViewStyle = false,
                    disabled = false,
                    color = 'white'
                }) => {
    return (
        <TouchableOpacity disabled={disabled} onPress={async () => {
            if (!loading)
                await onPress()
        }}>
            <View style={[noViewStyle ? {} : Styles.viewStyle, viewStyle]}>
                {loading ? (<ActivityIndicator color={color} size='large'/>) : (
                    <Text style={[noTextStyle ? {} : Styles.textStyle, textStyle, {opacity: disabled ? .5 : 1}]}>
                        {children}
                    </Text>
                )}

            </View>
        </TouchableOpacity>
    )
}


export default Button