import React, { useState } from 'react'
import { Ionicons, MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import Complaints from '../Screens/Complaints'
import Home from '../Screens/Home'
import Info from '../Screens/Info'

import { createDrawerNavigator } from '@react-navigation/drawer'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Header from '../components/Header'
import { themeColor } from '../const'
import { TabBar } from '../components/TabBar'

let Navigator = createBottomTabNavigator()

const horizontalAnimation = (back = false) => ({
	cardStyleInterpolator: ({ current, layouts }) => {
		return {
			cardStyle: {
				transform: [
					{
						translateX: current.progress.interpolate({
							inputRange: [0, 1],
							outputRange: [layouts.screen.width, 0],
						}),
					},
				],
			},
		};
	},
});

const Bottom = (props) => {

	return (
		<Navigator.Navigator tabBar={(props) => <TabBar {...props}/>} screenOptions={{ header: (props) => <Header {...props} />,tabBarActiveTintColor: themeColor }} initialRouteName="Home">

			<Navigator.Screen name="Complaints" options={{ tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons name="vote" color={color} size={size} />, }} component={Complaints} />

			<Navigator.Screen name="Home" options={{ tabBarIcon: ({ focused, color, size }) => <AntDesign name="home" color={color} size={size} />, }} component={Home} />

			<Navigator.Screen name="Guide" options={{
				tabBarIcon: ({ focused, color, size }) => <MaterialCommunityIcons
					name="recycle" color={color} size={size} />,
			}} component={Info} />

		</Navigator.Navigator>
	)


}
export default Bottom