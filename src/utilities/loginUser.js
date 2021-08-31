import React from 'react'
import {getData, storeData} from './dataStore'
import {login, setEmail, setToken, setUserID, setUsername} from '../redux/actions/auth'

export const SaveLoginData_Redux = (token, email, username, dispatch,id) => {
    dispatch(setEmail(email))
    dispatch(setToken(token))
    dispatch(setUsername(username))
    dispatch(setUserID(id))
    dispatch(login(true))
}
const SaveLoginData = async (dispatch, token, email, password, username,id) => {
    SaveLoginData_Redux(token, email, username, dispatch,id)
    await storeData(token, 'token')
    await storeData(email, 'email')
    await storeData(username, 'username')
    await storeData(password, 'password')
    await storeData(String(id), 'logged')
}
export const checkLoggedIn = async () => {
    const logged = await getData('logged')
    if (logged !== undefined && logged !== null) {
        const email = await getData('email')
        const token = await getData('token')
        const username = await getData('username')

        return {
            email,
            token,
            username,
            id : logged
        }
    }
    return false
}
export default SaveLoginData