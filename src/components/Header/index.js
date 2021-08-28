//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { layout } from '../../const';
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons';
// create a component
const Header = ({ navigation, options, route, back = false }) => {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center',top:3,flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => back ? navigation.pop() : navigation.openDrawer()}>
                    {back ? <AntDesign style={{}} name="back" size={24} color="black" /> : <Image source={require('../../../assets/hamburger2.png')} />}
                </TouchableOpacity>
                <Text style={{ marginLeft: 10, fontSize: 16 }}>{typeof(route.params) === 'object' && 'title' in route.params ? route.params.title  : route.name}</Text>
            </View>
            {/* <EvilIcons name="search" size={24} color="black" /> */}
            <Image width={layout.width / 2} height={300} resizeMode="contain" style={styles.image} source={require('../../../assets/leaves1.png')} />
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        width: '100%',
        marginTop: layout.statusBarHeight,
        paddingHorizontal: 15,
        backgroundColor: 'white',
        justifyContent: "space-between"
    },
    image: {
        width: layout.width / 2,
        height: 300, top: 10, left: 0, transform: [{ rotate: '-25deg' }],
    },
});

//make this component available to the app
export default Header;
