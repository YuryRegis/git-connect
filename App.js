// @refresh reset
import React from 'react'
import firebase from 'firebase/app'
import Navigator from './src/routes'
import { useFonts } from 'expo-font'
import { Provider } from 'react-redux'
import store from './src/store/config'
import AppLoading from 'expo-app-loading'
import { StatusBar } from 'expo-status-bar'
import Config from 'react-native-config'
import 'firebase/firestore'


const Store = store()

function Redux() {
  return (
    <Provider store={Store}>
      <Navigator/>
    </Provider>
  )
}

console.log(Config.API_KEY)

const firebaseConfig = {

  apiKey: "AIzaSyAcVT4hFT4Ft_v4sWzB-khdV4wM_19bFLw",

  authDomain: "gitconnect-101ef.firebaseapp.com",

  projectId: "gitconnect-101ef",

  storageBucket: "gitconnect-101ef.appspot.com",

  messagingSenderId: "164982834117",

  appId: "1:164982834117:web:284e73e45dbdebbb3601ac"

};


// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
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