// @refresh reset
import React from 'react'
import * as styled from './style'
import { useRoute } from '@react-navigation/core'
import {TouchableOpacity} from 'react-native'

function HeaderNav(props){
    const [userName, setUserName] = React.useState('')
    const route = useRoute()

    React.useEffect(() => {
        const nameToSet = props.user?.login || props.user?.userName?.split(' ')[0]
        setUserName(nameToSet)
        console.log('ROUTE_PARAMS',route.params)
    },[userName])


    function goBackHandler() {
        return props.navigation.goBack()
    }

    function goChatHandler() {
        console.log('ENVIANDO...', props.user)
        const params = {chatUser: props.user}
        props.navigation.navigate('ChatTab', params)
        setTimeout(() => props.navigation.push('Conversation', params), 300)
        // props.navigation.push('Conversation')
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
                <PageName thin={userName} strong='Chat' />
            )}
        
          </styled.RowContainer>
        </styled.Container>
    )
}

export default HeaderNav