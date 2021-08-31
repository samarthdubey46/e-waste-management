import React from 'react';
import {StyleSheet, View} from "react-native";
import {color} from "../../const";
import {Title} from "../../components/Typography";

const ErrorScreen = ({msg = 'Please Try Again Some Error Occurred'}) => {
    return (
        <View style={styles.container}>
            <Title>{msg}</Title>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: color.white,
        paddingVertical: 30,
        paddingHorizontal: 15,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})

export default ErrorScreen;
