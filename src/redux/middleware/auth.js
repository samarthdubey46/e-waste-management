import { SET_SKIP } from "../actions/types"
import { createNavigationContainerRef } from '@react-navigation/native';



export const navigationRef = createNavigationContainerRef()

const authMiddleWare = (store) => (next) => (action) => {
    switch (action.type) {
        case SET_SKIP:
            console.log('skip');
            next(action)
            if(navigationRef.isReady()){
                navigationRef.navigate('Bottom')
            }
            break
        default: next(action)
    }
}
export default authMiddleWare