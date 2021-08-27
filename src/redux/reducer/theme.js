import {
    TOGGLE_THEME,
    LOGOUT,
} from '../actions/types'
import { theme as State } from '../initial'

const themeReducer = (state = State, action) => {
    switch (action.type) {
        case TOGGLE_THEME: {
            const { content } = action.payload
            return {
                ...state,
                ...content
            }
        }
        
        case LOGOUT: {
            return state;
        }
        default:
            return state
    }
}
export default themeReducer