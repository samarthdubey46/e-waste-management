import {
    LOGIN,
    LOGOUT,
    SET_EMAIL,
    SET_LOADING,
    SET_PROFILE, SET_RELOAD,
    SET_SKIP,
    SET_TOKEN,
    SET_USER_ID,
    SET_USERNAME
} from '../actions/types'
import {auth as State} from '../initial'

const authReducer = (state = State, action) => {

    switch (action.type) {
        case SET_RELOAD: {
            const {content} = action.payload
            return {
                ...state,
                SHOULD_RELOAD: content
            };
        }
        case SET_LOADING: {
            const {content} = action.payload
            return {
                ...state,
                LOADING: content
            };
        }
        case SET_SKIP: {
            const {content} = action.payload
            return {
                ...state,
                LOGIN_SKIPPED: content
            };
        }

        case SET_PROFILE: {
            const {content} = action.payload
            return {
                ...state,
                PROFILE_IMAGE: content
            };
        }

        case SET_TOKEN: {
            const {content} = action.payload
            return {
                ...state,
                TOKEN: content
            };
        }
        case SET_USERNAME: {
            const {content} = action.payload
            return {
                ...state,
                USERNAME: content
            };
        }
        case SET_EMAIL: {
            const {content} = action.payload
            return {
                ...state,
                EMAIL: content
            };
        }

        case SET_USER_ID: {
            const {content} = action.payload
            return {
                ...state,
                USER_ID: content
            };
        }
        case LOGOUT: {
            return State;
        }
        case LOGIN: {
            const {content} = action.payload
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