import React from 'react'
import Theme from '../../../assets/style/global'
import { LinearGradient } from 'expo-linear-gradient'
import MaskedView from '@react-native-masked-view/masked-view'


const primary = Theme.gradient.primary
const secondary = Theme.gradient.secondary

function MaskedGradient({children, colors={primary, secondary}, size}) {

    return (      
        <MaskedView
            style={{height: size.h, width: size.w}}
            maskElement={children}
        >
            <LinearGradient
                style={{height: size.h, width: size.w}}
                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                colors={[colors.primary, colors.secondary]}
            />
        </MaskedView>
    )
}

export default MaskedGradient