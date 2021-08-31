import React, {useState} from 'react';
import {ActivityIndicator, Image, StyleSheet, ToastAndroid, TouchableOpacity, View} from 'react-native';
import {DrawerContentScrollView,} from '@react-navigation/drawer'
import {color} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {Ionicons} from '@expo/vector-icons';
import {Caption, Title} from "../Typography";
import BlogNavigationButton from "../Button/blogNavigation";
import {setLoading as SetLOading, setLoginSkipped} from "../../redux/actions/auth";
import {LOgout} from "../../API/auth";
import Logout from "../../utilities/logout";

const DrawerContent = ({navigation, state}) => {
    const profile = useSelector(state => state.auth.PROFILE_IMAGE)
    const logged = useSelector(state => state.auth.ISLOGGED)
    const username = useSelector(state => state.auth.USERNAME)
    let token = useSelector(state => state.auth.TOKEN)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const email = useSelector(state => state.auth.EMAIL)
    const size = 80
    const routes = [
        'Home',
        'Complaints',
        'Guide',
        'Profile Update'
    ]
    const TabNavigate = (route = 'Home', type = 'tab', index = 0) => {
        navigation.reset({
            index: index,
            type: type,
            routes: [{name: route}],
        })
        navigation.closeDrawer()
    }
    const navigate = (screen) => {
        if (logged) {
            TabNavigate('Complaints')
            navigation.navigate(screen)
            navigation.closeDrawer()
        } else {
            ToastAndroid.show('You need to Login for Registering Complaint', 1000)
        }
    }
    const login_logout = async () => {
        if (logged) {
            try {
                navigation.closeDrawer()
                dispatch(SetLOading(true))
                let res = await LOgout(token)
                console.log(res)
                await Logout(dispatch)
                dispatch(SetLOading(false))
            } catch (e) {
                dispatch(SetLOading(false))
            }
        } else {
            navigation.closeDrawer()
            dispatch(setLoginSkipped(false))

        }
    }
    return (
        <View style={{flex: 1}}>
            <DrawerContentScrollView
                style={[styles.container,]}>
                {loading ? (<ActivityIndicator size="large" color="black"/>) :
                    <>
                        <TouchableOpacity style={{marginBottom: 30}} onPress={() => navigation.closeDrawer()}>
                            <Ionicons name="arrow-back" size={30} color="black"/>
                        </TouchableOpacity>
                        <Image style={{width: size, height: size, borderRadius: size / 2, marginBottom: 20}}
                               source={(logged && !(profile === null || profile === undefined)) ? {uri: profile} : require('../../../assets/dummy.jpg')}/>
                        <Title style={{marginBottom: 20, fontSize: 25}}>{logged ? username : 'No username'}</Title>
                        <BlogNavigationButton onPress={() => login_logout()}
                                              viewStyle={{width: 80, marginBottom: 30}}
                                              text={logged ? 'Logout' : 'Login'}/>
                        <Caption onPress={() => TabNavigate()} style={{fontSize: 16, marginBottom: 25}}>Home</Caption>
                        <Caption onPress={() => TabNavigate('Complaints')}
                                 style={{fontSize: 16, marginBottom: 25}}>Complaints</Caption>
                        <Caption onPress={() => TabNavigate('Guide')}
                                 style={{fontSize: 16, marginBottom: 25}}>Guide</Caption>
                        {/*<Caption onPress={() => navigate('ProfileUpdate')} style={{fontSize: 16, marginBottom: 25}}>Profile*/}
                        {/*    Update</Caption>*/}
                        <Caption onPress={() => navigate('AddComplaint')} style={{fontSize: 16, marginBottom: 40}}>Add
                            Complaint</Caption>
                        {/*<Caption onPress={() => login_logout()}*/}
                        {/*         style={{fontSize: 16}}>{logged ? 'Logout' : 'Login'}</Caption>*/}
                    </>
                }
            </DrawerContentScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {backgroundColor: color.white, paddingVertical: 10, paddingHorizontal: 15, flex: 1,},
    text: {textAlign: 'left', letterSpacing: 1.3, lineHeight: 30}
})
export default DrawerContent