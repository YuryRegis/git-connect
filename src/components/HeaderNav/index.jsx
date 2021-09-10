import React from 'react'
import * as styled from './style'
import {TouchableOpacity} from 'react-native'


function HeaderNav(props){

    return (
        <styled.RowContainer>

            <TouchableOpacity onPress={()=>{}}>
                <styled.Icon size={23} name='chevron-back'/> 
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{}}>
                <styled.Icon size={23} name='chatbubble-ellipses'/> 
            </TouchableOpacity>
        
        </styled.RowContainer>
    )
}

export default HeaderNav