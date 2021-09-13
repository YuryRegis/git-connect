import React from 'react'
import * as styled from './style'
import Theme from '../../../assets/style/global'
import { LinearGradient } from 'expo-linear-gradient'


const primary = Theme.gradient.primary
const secondary = Theme.gradient.secondary

export function GradientButton({ children, colors={primary, secondary}, ...props }) {
    return (
        <styled.Container {...props}>

            <LinearGradient 
                style={{borderRadius: 3}}
                start={{x: 0, y: 0}} end={{x: 1, y: 1}}
                colors={[colors.primary, colors.secondary]} 
            >
                {children}
            </LinearGradient>

        </styled.Container>
    )
}

export default GradientButton