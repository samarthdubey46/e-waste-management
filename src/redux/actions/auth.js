import { SET_TOKEN, SET_USERNAME, SET_EMAIL, LOGOUT, LOGIN, SET_USER_ID,SET_SKIP } from './types'

export const setLoginSkipped = login_skipped => (
    {
        type: SET_SKIP,
        payload: { content: login_skipped },
    }
)
export const setToken = token => (
    {
        type: SET_TOKEN,
        payload: { content: token },
    }
)

export const setUsername = username => (
    {
        type: SET_USERNAME,
        payload: { content: username },
    }
)

export const setEmail = email => (
    {
        type: SET_EMAIL,
        payload: { content: email },
    }
)
export const setUserID = id => (
    {
        type: SET_USER_ID,
        payload: { content: id },
    }
)
export const logout = () => (
    {
        type: LOGOUT,
        payload: {content:null},
    }
)
export const login = status => (
    {
        type: LOGIN,
        payload: {content:status},
    }
)
