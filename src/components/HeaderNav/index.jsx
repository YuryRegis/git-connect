import React from 'react'
import * as styled from './style'
import {TouchableOpacity} from 'react-native'

function HeaderNav(props){

    function goBackHandler() {
        return props.navigation.goBack()
    }

    function goChatHandler() {
        return props.navigation.navigate('ChatTab')
    }

    function PageName({thin, strong}) {
        return (
            <styled.LogoTextContainer>
                    <styled.LogoLabelThin>{thin}</styled.LogoLabelThin>
                    <styled.LogoLabelStrong>{strong}</styled.LogoLabelStrong>
            </styled.LogoTextContainer>
        )
    }

    
    return (
        <styled.Container>
          <styled.RowContainer>

            <TouchableOpacity onPress={()=>goBackHandler()}>
                <styled.Icon size={23} name='chevron-back'/> 
            </TouchableOpacity>
            
            { props.chat && (
                <TouchableOpacity onPress={()=>goChatHandler()}>
                    <styled.Icon size={23} name='chatbubble-ellipses'/> 
                </TouchableOpacity>
            )}
            
            { props.screenNav==='ProjectsStack' && (
                <PageName thin='user' strong='Projects' />
            )}

            { props.screenNav==='AllUserFollowing' && (
                <PageName thin='all' strong='Following' />
            )}

            { props.screenNav==='AllUserFollowers' && (
                <PageName thin='all' strong='Followers' />
            )}

            { props.screenNav==='Repository' && (
                <PageName thin='git' strong='Repo' />
            )}
 
            { props.screenNav==='Conversation' && (
                <PageName thin={props.user?.userName?.split(' ')[0]} strong='Chat' />
            )}
        
          </styled.RowContainer>
        </styled.Container>
    )
}

export default HeaderNav