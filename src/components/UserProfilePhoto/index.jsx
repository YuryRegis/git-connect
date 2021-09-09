import React from 'react'
import * as styled from './style'
import Theme from '../../../assets/style/global'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'


function UserProfilePhoto({source, userInfo, height=110, width=110, style, ...props}) {
    
    return (
        <styled.Container>
            <styled.Avatar source={source} size={{height, width}}/>
            <MaskedView 
                style={{position: 'absolute'}}
                maskElement={
                    <styled.RoundedBorder size={{height, width}}/>
                }
            >
                <LinearGradient 
                        style={{height, width}}
                        start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                        colors={[Theme.gradient.primary, Theme.gradient.secondary]}
                />          
            </MaskedView>
            {userInfo && <styled.InfoIcon />}
        </styled.Container>
    )   
}

export default UserProfilePhoto

