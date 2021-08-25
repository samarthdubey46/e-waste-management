import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Main from './src/navigation/Stack'
const App = (props) => {
  
  return (
    <NavigationContainer>
      <Main/>
    </NavigationContainer>
  )
}
export default App