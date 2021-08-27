import React, { useContext, useState } from 'react'
import { Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import { createStackNavigator } from '@react-navigation/stack'
import AddComplaint from '../Screens/AddComplaint'
import MyComplaints from '../Screens/MyComplaints'
import Profile from '../Screens/Profile'
import ProfileUpdate from '../Screens/ProfileUpdate'
import Bottom from './Bottom'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Forgot_Password from '../Screens/Forgot_Password'
import { useSelector } from 'react-redux'

let Navigator = createStackNavigator()

const Stack = (props) => {

	const isLogged = useSelector(state => state.auth.ISLOGGED)
	const skipLogin = useSelector(state => state.auth.LOGIN_SKIPPED)

	if (skipLogin) {
		return (
			<Navigator.Navigator>

				<Navigator.Screen options={{ headerShown: false }} name="Bottom" component={Bottom} />

				<Navigator.Screen options={null} name="ProfileUpdate" component={ProfileUpdate} />

				<Navigator.Screen options={null} name="Profile" component={Profile} />

				<Navigator.Screen options={null} name="MyComplaints" component={MyComplaints} />

				<Navigator.Screen options={null} name="AddComplaint" component={AddComplaint} />

				<Navigator.Screen options={{ headerShown: false }} name="Login" component={Login} />

				<Navigator.Screen options={{ headerShown: false }} name="Register" component={Register} />

			</Navigator.Navigator>
		)
	}

	if (isLogged) {
		return (
			<Navigator.Navigator>

				<Navigator.Screen options={{ headerShown: false }} name="Bottom" component={Bottom} />

				<Navigator.Screen options={null} name="ProfileUpdate" component={ProfileUpdate} />

				<Navigator.Screen options={null} name="Profile" component={Profile} />

				<Navigator.Screen options={null} name="MyComplaints" component={MyComplaints} />

				<Navigator.Screen options={null} name="AddComplaint" component={AddComplaint} />

			</Navigator.Navigator>
		)
	}

	return (
		<Navigator.Navigator>

			<Navigator.Screen options={{ headerShown: false }} name="Login" component={Login} />

			<Navigator.Screen options={{ headerShown: false }} name="Register" component={Register} />

			<Navigator.Screen options={null} name="Forgot_Password" component={Forgot_Password} />

		</Navigator.Navigator>
	)


}
export default Stack