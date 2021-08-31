import React, {useEffect, useState} from 'react'
import Stack from './Stack'

import {createDrawerNavigator} from '@react-navigation/drawer'
import DrawerContent from "../components/drawerContent";
import {useDispatch, useSelector} from "react-redux";
import {checkLoggedIn, SaveLoginData_Redux} from "../utilities/loginUser";
import LoadingScreen from "../Screens/Loading";

let Navigator = createDrawerNavigator()

const Drawer = (props) => {
    const isLogged = useSelector(state => state.auth.ISLOGGED)
    const skipLogin = useSelector(state => state.auth.LOGIN_SKIPPED)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        (async () => {
            try {
                setLoading(true)
                let res = await checkLoggedIn()
                if (res !== false) {
                    const {email,username,token,id} = res
                    SaveLoginData_Redux(token,email,username,dispatch,id)
                }
                setLoading(false)
            } catch (e) {
                console.log(e,'Error Message')
                setLoading(false)

            }
        })()
    }, []);

    if(loading){
        return <LoadingScreen/>
    }
    if (!isLogged && !skipLogin) {
        return <Stack/>
    }
    return (
        <Navigator.Navigator drawerContent={(props) => <DrawerContent {...props}/>}>

            <Navigator.Screen options={{headerShown: false}} name="Stack" component={Stack}/>

        </Navigator.Navigator>
    )


}
export default Drawer