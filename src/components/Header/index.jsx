import React from 'react'
import * as styled from './style'
import {TouchableOpacity} from 'react-native'


function Header(props){

    return (
        <styled.RowContainer>

            <TouchableOpacity onPress={()=>{}}>
                <styled.Icon size={23} name='logo-github'/>
            </TouchableOpacity>

            <styled.LogoTextContainer>
                <styled.LogoLabelStrong>Git</styled.LogoLabelStrong>
                <styled.LogoLabelThin>Connect</styled.LogoLabelThin>
            </styled.LogoTextContainer>
        
        </styled.RowContainer>
    )
}

export default Header