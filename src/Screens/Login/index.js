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
const Login = ({ navigation, route }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setErrors] = useState([false, false])
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setErrors([false, false])
    }, [])
    const loginUser = () => {

        setErrors([false, false])
        let errs = [false, false]
        if (email.length === 0 || !validateEmail(email)) errs[0] = true
        if (password.length <= 3) errs[1] = true
        if (!errs.every(item => item === false)) {
            setErrors(errs)
            return
        }
        const res = { success: true }
        if (res.success) {
            dispatch(login(true))
        }
    }
    const skipLogin = async () => {
        if (loading) return
        setLoading(true)
        dispatch(setLoginSkipped(true))
        await setTimeout(() => {
            navigation.replace('Bottom')
        }, 100)
        setLoading(false)

    }
    return (
        <ScrollView style={{ marginTop: layout.statusBarHeight }}>
            <View style={styles.container}>
                <View style={styles.loginTextWithImage}>
                    <View style={{ left: 15 }}>
                        <Title style={styles.title}>LOGIN</Title>
                        <Caption>Sign in with your account</Caption>
                    </View>
                    <Image width={300} height={300} resizeMode="contain" style={styles.image} source={require('../../../assets/leaves1.png')} />

                </View>
                <View style={{ flex: .47, alignItems: 'flex-end', }}>
                    <RoundTextInput error={error[0]} viewStyle={{ marginBottom: 30 }} value={email} setValue={setEmail} placeHolder="Email" holder="Email Id" />
                    <RoundTextInput error={error[1]} viewStyle={{ marginBottom: 10 }} value={password} setValue={setPassword} placeHolder="Password" holder="Password" secureTextEntry />
                    <TouchableOpacity onPress={async () => await skipLogin()}>
                        <Text style={{ color: themeColor, marginHorizontal: 15, fontSize: 16 }}>Skip Login</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: .31, justifyContent: 'space-between', }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <RoundButton loading={loading} onPress={() => loginUser()} text='Login' />
                    </View>
                    <View style={[{ marginBottom: 10, }]}>
                        <View style={styles.questionview}>
                            <Text>Don't have an account ?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                                <Title style={{ color: themeColor }}>REGISTER</Title>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}
export default Login

const styles = StyleSheet.create({
    questionview: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' },
    title: { color: themeColor, fontWeight: '900', fontSize: 30, },
    image: {
        width: layout.width / 1.7,
        height: 300, top: 0, left: 0, transform: [{ rotate: '0deg' }],
    },
    loginTextWithImage: {
        flex: .22,
        justifyContent: 'space-around',
        flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'
    },
    container: { flex: 1, height: layout.height - 10, paddingVertical: 10, backgroundColor: 'white' },
})