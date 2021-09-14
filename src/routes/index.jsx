import React from 'react'
import { connect } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import TabNav from './Tab'
import Login from '../views/Login'


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
        <SafeAreaView style={{flex:1}}>
            {validateAuth(props.isAuthenticated)}
        </SafeAreaView>
    )
}

function mapStateToProps(state){
    return {
        isAuthenticated: state.user.isAuthenticated
    }
}

export default connect(mapStateToProps, null)(Routes)