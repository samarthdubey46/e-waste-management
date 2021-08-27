import React from 'react'
import { Dimensions } from 'react-native'
import Constants from 'expo-constants';

const layout = {
    width : Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    statusBarHeight:Constants.statusBarHeight
}
export default layout                         