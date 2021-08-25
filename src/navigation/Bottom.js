import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import Complaints from '../Screens/Complaints'
import Home from '../Screens/Home'
import Info from '../Screens/Info'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

let Navigator = createBottomTabNavigator()

const Bottom = (props) => {

	return (
		<Navigator.Navigator>

			<Navigator.Screen name="Complaints" options={{ tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="vote" color={color} size={size} />, }} component={Complaints} />

			<Navigator.Screen name="Home" options={{ tabBarIcon: ({ focused, color, size }) => <AntDesign name="home" color={color} size={size} />, }} component={Home} />

			<Navigator.Screen name="Info" options={{ tabBarIcon: ({ focused, color, size }) => <Ionicons name="information-circle-outline" color={color} size={size} />, }} component={Info} />

		</Navigator.Navigator>
	)


}
export default Bottom