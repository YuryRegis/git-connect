import React from 'react'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/store/config'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'

import Navigator from './src/routes'


function Redux() {
  return (
    <Provider store={store}>
      <Navigator/>
    </Provider>
  )
}

export function App() {
  let [fontsLoaded] = useFonts({
    'roboto-regular': require('./assets/fonts/Roboto/Roboto-Medium.ttf'),
    'roboto-light': require('./assets/fonts/Roboto/Roboto-Light.ttf'),
    'roboto-thin': require('./assets/fonts/Roboto/Roboto-Thin.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto/Roboto-Bold.ttf'),
  })
  
  return ( 
    fontsLoaded 
      ? <Navigator/>
      : <AppLoading/>
  )
}

export default App