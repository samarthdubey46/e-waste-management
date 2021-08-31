import React from 'react'
import { storeData, getData, clearData } from './dataStore'
import { logout } from '../redux/actions/auth'

export const Logout_Redux = (dispatch) => {
    dispatch(logout())
}
const Logout = async (dispatch) => {
    Logout_Redux(dispatch)
    await clearData('token')
    await clearData('email')
    await clearData('password')
    await clearData('logged')
    await clearData('username')
}
export default Logout