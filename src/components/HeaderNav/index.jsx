import React from 'react'
import * as styled from './style'
import {TouchableOpacity} from 'react-native'


function HeaderNav(props){

    return (
        <styled.Container>
          <styled.RowContainer>

            <TouchableOpacity onPress={()=>{}}>
                <styled.Icon size={23} name='chevron-back'/> 
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>{}}>
                <styled.Icon size={23} name='chatbubble-ellipses'/> 
            </TouchableOpacity>
        
          </styled.RowContainer>
        </styled.Container>
    )
}

export default HeaderNav