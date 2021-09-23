// @refresh reset
import React from 'react'
import firebase from 'firebase/app'
import Navigator from './src/routes'
import { useFonts } from 'expo-font'
import FirebaseConfig from './firebaseConfig'
import { Provider } from 'react-redux'
import store from './src/store/config'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import 'firebase/firestore'


const Store = store()

function Redux() {
  return (
    <Provider store={Store}>
      <Navigator/>
    </Provider>
  )
}

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(FirebaseConfig)
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
      ? Redux()
      : <AppLoading/>
  )
}

export default App