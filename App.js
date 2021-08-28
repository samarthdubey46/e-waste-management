import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/navigation/Drawer'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { navigationRef } from './src/redux/middleware/auth'
const App = (props) => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <Main />
      </NavigationContainer>
    </Provider>

  )
}
export default App