import React, { useState } from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, Image, ScrollView } from 'react-native'
import { Title } from '../../components/Typography'
import TextInput from '../../components/TextInput'
import { color, themeColor } from '../../const'
import Button from '../../components/Button'
import { layout } from '../../const'
const Login = ({ navigation, route }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <ScrollView style={{marginTop:layout.statusBarHeight}}>
            <View style={{ flex: 1, height: layout.height, paddingHorizontal: 20, paddingVertical: 9, backgroundColor: 'white' }}>
                <View style={{ flex: .7 }}>
                    <View style={[styles.Login]}>
                        <Title style={{ fontSize: 30 }}>Log In</Title>
                    </View>
                    <View style={styles.Input}>
                        <View style={{ flex: .35, justifyContent: 'space-between', }}>
                            <TextInput value={email} placeHolder="Your Email" setValue={setEmail} />
                            <TextInput value={password} placeHolder="Password" secureTextEntry setValue={setPassword} />
                        </View>
                        <View style={{
                            top: -1, flex: .1, flexDirection: 'row', justifyContent: 'space-between'
                            , alignItems: 'center'
                        }}>
                            <TouchableOpacity>
                                <Text style={{ color: themeColor }}>Dont have a account? Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: themeColor }}>Later</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: .5, justifyContent: 'center', alignItems: 'stretch' }}>
                            <Button viewStyle={{ backgroundColor: themeColor }}>
                                Login
                            </Button>
                        </View>
                    </View>
                </View>
                <View style={{ flex: .3, alignItems: 'center', left: 5, justifyContent: 'center', }}>
                    <Image width={layout.width} style={{ width: layout.width + 50 }} resizeMode="contain" source={require('../../../assets/login.png')} />
                </View>
            </View>
        </ScrollView>
    )
}
export default Login

const styles = StyleSheet.create({
    Input: { flex: .65, paddingHorizontal: 15, backgroundColor: 'white' },
    Login: {
        flex: .35,
        justifyContent: 'center',
        alignItems: 'center'
    },
})