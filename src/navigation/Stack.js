import React, {useEffect} from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import AddComplaint from '../Screens/AddComplaint'
import SingleBlog from '../Screens/SingleBlog'
import Profile from '../Screens/Profile'
import ProfileUpdate from '../Screens/ProfileUpdate'
import Bottom from './Bottom'
import Login from '../Screens/Login'
import Register from '../Screens/Register'
import Forgot_Password from '../Screens/Forgot_Password'
import {useSelector} from 'react-redux'
import Header from '../components/Header'
import Map from "../Screens/Map";
import SingleGuide from "../Screens/SingleGuide";
import LoadingScreen from "../Screens/Loading";

let Navigator = createStackNavigator()


const horizontalAnimation = (back = false) => ({
    cardStyleInterpolator: ({current, layouts}) => {
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


const Stack = ({navigation}) => {

    const isLogged = useSelector(state => state.auth.ISLOGGED)
    const skipLogin = useSelector(state => state.auth.LOGIN_SKIPPED)
    const loading = useSelector(state => state.auth.LOADING)

    useEffect(() => {
        try {
            navigation.closeDrawer()
        } catch (e) {
        }
    }, []);


    if (loading) {
        return (
            <LoadingScreen/>

        )
    }

    if (isLogged || skipLogin) {
        return (
            <Navigator.Navigator screenOptions={{header: (props) => <Header {...props} back/>}}>

                <Navigator.Screen options={{headerShown: false}} name="Bottom" component={Bottom}/>

                <Navigator.Screen options={null} name="ProfileUpdate" component={ProfileUpdate}/>

                <Navigator.Screen options={null} name="Profile" component={Profile}/>

                <Navigator.Screen options={null} name="Map" component={Map}/>

                <Navigator.Screen options={null} name="SingleGuide" component={SingleGuide}/>

                <Navigator.Screen
                    options={({navigation, route = {params: {}}}) => (horizontalAnimation('back' in route.params))}
                    name="SingleBlog" component={SingleBlog}/>

                <Navigator.Screen options={null} name="AddComplaint" component={AddComplaint}/>
            </Navigator.Navigator>
        )
    }

    return (
        <Navigator.Navigator>

            <Navigator.Screen options={{headerShown: false}} name="Login" component={Login}/>

            <Navigator.Screen options={{headerShown: false}} name="Register" component={Register}/>

            <Navigator.Screen options={null} name="Forgot_Password" component={Forgot_Password}/>

        </Navigator.Navigator>
    )


}
export default Stack