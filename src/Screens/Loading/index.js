import React from 'react';
import {ActivityIndicator, StyleSheet, View} from "react-native";
import {color} from "../../const";

const LoadingScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="black" />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 30, paddingHorizontal: 15, flex: 1,justifyContent:'center',alignItems:'center'},
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})

export default LoadingScreen;
