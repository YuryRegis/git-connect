import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import TabNav from './Tab'


export function Routes (props) {
    return (
        <SafeAreaView style={{flex:1}}>
            <NavigationContainer>                
                <TabNav />                
            </NavigationContainer>
        </SafeAreaView>
    )
}

export default Routes