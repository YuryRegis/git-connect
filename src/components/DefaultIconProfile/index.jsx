import React from 'react'
import * as styled from './style'
import MaskedGradient from '../MaskedGradient'


export function DefaultIconProfile({size}) {
    const incognitaSize = size/3
    console.log('Size', size)
    return (
        <styled.IconContainer>
            
            <MaskedGradient size={{h: size, w:size}}>
                <styled.DefaultIcon name='logo-github' size={size}/>
            </MaskedGradient>

            <styled.IncognitaContainer>

                <MaskedGradient size={{h: incognitaSize, w: incognitaSize}}>
                    <styled.DefaultIcon name='help' size={incognitaSize}/>
                </MaskedGradient>

            </styled.IncognitaContainer>

        </styled.IconContainer>
    )

}

export default DefaultIconProfile