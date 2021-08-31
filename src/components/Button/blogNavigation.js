//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Button from './button'

// create a component
const BlogNavigationButton = ({ text,disabled = false,onPress, viewStyle = {}, textStyle = {}, loading = false }) => {
    return <Button color='black' children={text} onPress={onPress} disabled={disabled} loading={loading} noTextStyle noViewStyle textStyle={{...styles.text,...textStyle}} viewStyle={{...styles.container,...viewStyle}}/>
};

// define your styles
const styles = StyleSheet.create({
    container: {
        minHeight: 40, minWidth: 90, borderRadius: 5, backgroundColor: 'white',
        elevation: 0, borderWidth: .8, borderColor: 'rgba(0,0,0,.3)',
        justifyContent: 'center', alignItems: 'center'
    },
    text : {fontWeight:'bold',fontSize:15}
})
//make this component available to the app
export default BlogNavigationButton;
