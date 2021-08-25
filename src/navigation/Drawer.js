import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import Stack from './Stack'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

let Navigator = createDrawerNavigator()

const Drawer = (props) => {

  return (
    <Navigator.Navigator>

      <Navigator.Screen options={{headerShown:false}} name="Stack" component={Stack} />

    </Navigator.Navigator>
  )


}
export default Drawer