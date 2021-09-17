import React from 'react'
import * as styled from './style'
import {TouchableOpacity} from 'react-native'


function HeaderNav(props){

    function goBackHandler(){
        return props.navigation.goBack()
    }

    function goChatHandler(){
        return props.navigation.navigate('ChatTab')
    }

    return (
        <styled.Container>
          <styled.RowContainer>

            <TouchableOpacity onPress={()=>goBackHandler()}>
                <styled.Icon size={23} name='chevron-back'/> 
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=>goChatHandler()}>
                <styled.Icon size={23} name='chatbubble-ellipses'/> 
            </TouchableOpacity>
        
          </styled.RowContainer>
        </styled.Container>
    )
}

export default HeaderNav