import { TOGGLE_THEME } from './types'

export const ToogleTheme = (mode) => (
    {
        type: TOGGLE_THEME,
        payload: { content: mode }
    }
)
