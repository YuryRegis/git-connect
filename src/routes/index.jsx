import React from 'react'
import { connect } from 'react-redux'
import { View, StatusBar, Platform } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import TabNav from './Tab'
import Login from '../views/Login'

const isAndroid = Platform.OS==='android'

if (isAndroid) {
    StatusBar.setBarStyle('light-content')
    StatusBar.setBackgroundColor('#000')
}

// console.log(Platform.OS)

function validateAuth(isAuthenticated){
    if(isAuthenticated){
        return (
            <NavigationContainer>                
                <TabNav />                
            </NavigationContainer>
        )
    }else{
        return <Login />
    }
}

export function Routes (props) {
    return (
        <View style={{flex:1}}>
            {Platform.OS=='ios' && <View style={{height:28, backgroundColor: 'black'}}/>}
            {validateAuth(props.isAuthenticated)}
        </View>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Routes)