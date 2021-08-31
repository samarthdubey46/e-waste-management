import React from "react";
import {Pressable, StyleSheet, Text, TextInput as Textinput, View,} from "react-native";
import {layout} from "../../const";
import colors from "../../const/colors";
import {Caption, Title} from "../Typography";
import Style from './style';

const TextInput = ({
                       holderShown = true,
                       value,
                       setValue,
                       inputStyle = {},
                       placeHolder,
                       secureTextEntry = false,
                       props = {},
                       style = {},
                       error = false,
                       onPress,
                       shouldUseOnPress = false
                   }) => {
    return (
        <View style={[style, {marginBottom: 20}, ]}>
            {holderShown && <Text style={Style.text}>{placeHolder}</Text>}
            {shouldUseOnPress ? (
                <Pressable onPress={onPress} style={[Style.textViewContainer, {justifyContent: 'center'}, inputStyle,error ? {borderWidth: 1, borderColor: colors.red} : {}]}>
                    {value.length === 0 ? <Caption style={{opacity: .4, fontSize: 16}}>{placeHolder ?? ''}</Caption> :
                        <Text style={{fontSize: 16}}>{value}</Text>}
                </Pressable>
            ) : (
                <Textinput
                    style={[Style.textViewContainer, inputStyle,error ? {borderWidth: 1, borderColor: colors.red} : {}]}
                    value={value}
                    onChangeText={(text) => {
                        setValue(text)
                    }}
                    {...props}
                    placeholder={placeHolder}
                    placeholderTextColor='#A0A0A0'
                    secureTextEntry={secureTextEntry}
                />
            )}
            {error && <Caption style={{color:'red',alignSelf:'flex-end'}}>{error}</Caption>}

        </View>
    )
}
export const RoundTextInput = ({
                                   error = false,
                                   titleStyle = {},
                                   viewStyle = {},
                                   insideViewStyle = {},
                                   holder = '',
                                   value,
                                   setValue,
                                   placeHolder = '',
                                   secureTextEntry = false,
                                   props = {},
                                   style = {},
                                   taken = false
                               }) => {
    return (
        <View style={[{minHeight: 85, marginVertical: 5}, viewStyle]}>
            <Title style={[styles.titleStyle, titleStyle]}>{holder}</Title>
            <View style={[styles.roundView, !error ? {} : styles.errorView]}>
                <Textinput
                    value={value}
                    style={[{flex: 1, paddingHorizontal: 24}, style]}
                    onChangeText={(t) => setValue(t)}
                    placeholder={placeHolder}
                    {...props}
                    secureTextEntry={secureTextEntry}
                />
            </View>
            {error && <View style={{alignItems: 'flex-end', marginHorizontal: 15}}>
                <Caption style={{color: colors.red}}>{taken ? 'This Email is Already Taken' : `Enter Valid ${placeHolder}`}</Caption>
            </View>}
        </View>
    )
}
export default TextInput

const styles = StyleSheet.create({
    errorView: {borderWidth: .4, borderColor: colors.red},
    titleStyle: {fontSize: 18, paddingHorizontal: 20},
    roundView: {
        width: layout.width / 1.3, minHeight: 65, borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50, alignItems: 'stretch', justifyContent: 'center'
        , backgroundColor: 'white', elevation: 15, marginVertical: 5,
    },
})