import { SET_TOKEN, SET_USERNAME, SET_EMAIL, SET_COMPANY,SET_USER_PINCODE,LOGOUT, LOGIN, SET_ADDRESS,SET_USER_ID,SET_SKIP } from '../actions/types'
import { auth as State } from '../initial'
const authReducer = (state = State, action) => {

    switch (action.type) {
        case SET_SKIP: {
            const { content } = action.payload
            return {
                ...state,
                LOGIN_SKIPPED: content
            };
        }
        case SET_TOKEN: {
            const { content } = action.payload
            return {
                ...state,
                TOKEN: content
            };
        }
        case SET_USERNAME: {
            const { content } = action.payload
            return {
                ...state,
                USERNAME: content
            };
        }
        case SET_EMAIL: {
            const { content } = action.payload
            return {
                ...state,
                EMAIL: content
            };
        }

        case SET_COMPANY: {
            const { content } = action.payload
            return {
                ...state,
                COMPANY: content
            };
        }
        case SET_USER_PINCODE: {
            const { content } = action.payload
            return {
                ...state,
                PINCODE: content
            };
        }
        case SET_ADDRESS: {
            const { content } = action.payload
            return {
                ...state,
                ADDRESS: content
            };
        }
        case SET_USER_ID: {
            const { content } = action.payload
            return {
                ...state,
                USER_ID: content
            };
        }
        case LOGOUT: {
            return State;
        }
        case LOGIN: {
            const { content } = action.payload
            return {
                ...state,
                ISLOGGED: content
            };
        }

        default:
            return state
    }
}
export default authReducer