import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import { Caption, Title } from '../../components/Typography'
import { color, themeColor } from '../../const'
import Button, { RoundButton } from '../../components/Button'
import { layout } from '../../const'
import { useDispatch } from 'react-redux'
import { validateEmail } from '../../utilities/validation'
import { login, setLoginSkipped } from '../../redux/actions/auth'
import { RoundTextInput } from '../../components/TextInput'
const Register = ({ navigation, route }) => {
    const [email, setEmail] = useState('samarthdubey46@gmail.com')
    const [userName, setUserName] = useState('Robert')
    const [password, setPassword] = useState('123456')

    const [error, setErrors] = useState([false,false,false])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setErrors([false,false,false])
    }, [])
    const registerUser = () => {
        setErrors([false,false,false])
        let errs = [false,false,false]
        if(userName.length === 0) errs[0] = true
        if(email.length === 0 || !validateEmail(email)) errs[1] = true
        if(password.length <= 3) errs[2] = true
        if(!errs.every(item => item === false)){
            setErrors(errs)
            return
        }
        const res = { success: true }
        if (res.success) {
            dispatch(login(true))
        }
    }
    return (
        <ScrollView style={{ marginTop: layout.statusBarHeight }}>
            <View style={styles.container}>
                <View style={styles.loginTextWithImage}>
                    <View style={{ left: 15 }}>
                        <Title style={styles.title}>Register</Title>
                        <Caption>Register your account    </Caption>
                    </View>
                    <Image width={300} height={300} resizeMode="contain" style={styles.image} source={require('../../../assets/leaves1.png')} />
                </View>
                <View style={{ flex: .65, alignItems: 'flex-end',justifyContent:'center',top:-15 }}>

                    <RoundTextInput error={error[0]} viewStyle={{ marginBottom: 30 }}
                        value={userName} setValue={setUserName} placeHolder="Username" holder="Name" />
                    <RoundTextInput error={error[1]} viewStyle={{ marginBottom: 30 }}
                        value={email} setValue={setEmail} placeHolder="Email" holder="Email Id" />

                    <RoundTextInput error={error[2]} viewStyle={{ marginBottom: 10 }}
                        value={password} setValue={setPassword} placeHolder="Password" holder="Password" secureTextEntry />
                </View>
                <View style={{ flex: .2, justifyContent: 'space-between', }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <RoundButton loading={loading} onPress={() => registerUser()} text='Register' />
                    </View>
                    <View style={[{ marginBottom: 10, }]}>
                        <View style={styles.questionview}>
                            <Text>Do you have an account ?</Text>
                            <TouchableOpacity onPress={() => navigation.pop()}>
                                <Title style={{ color: themeColor }}>  LOGIN</Title>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Register

const styles = StyleSheet.create({
    questionview: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
    title: { color: themeColor, fontWeight: '900', fontSize: 30 },
    image: {
        width: layout.width / 1.7,
        height: 300, top: 0, left: 0, transform: [{ rotate: '0deg' }]
    },
    loginTextWithImage: {
        flex: .15,
        justifyContent: 'space-around',
        flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'
    },
    container: { flex: 1, height: layout.height - 10, paddingVertical: 10, backgroundColor: 'white' },
})