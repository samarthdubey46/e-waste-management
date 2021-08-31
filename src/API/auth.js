import POST from "./requests/post";
import {LOGIN, LOGOUT, REGISTER} from "../const/urls";

export const LOgin = async (email, password) => {
    try {
        const data = {
            username: email,
            password
        }
        const res = await POST(LOGIN, data)
        return res
    } catch (e) {
        return {status: 'Internal Error', message: e}
    }
}
export const REgister = async (email, password,username) => {
    try {
        const data = {
            email,
            password,
            username
        }
        const res = await POST(REGISTER, data)
        return res
    } catch (e) {
        return {status: 'Internal Error', message: e}
    }
}
export const LOgout = async (token) => {
    try {
        const res = await POST(LOGOUT, {},token)
        return res
    } catch (e) {
        return {status: 'Internal Error', message: e}
    }
}
