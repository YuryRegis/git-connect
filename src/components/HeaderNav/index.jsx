// @refresh reset
import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import { setUserChat } from '../../store/actions/userChat'
import {TouchableOpacity, BackHandler} from 'react-native'
import { removeLastUserViewed } from '../../store/actions/lastUserViwed'
import { setPageTitle, removePageTitle } from '../../store/actions/titles'


function HeaderNav(props){
    const [userName, setUserName] = React.useState('')

    
    React.useEffect(() => {
        const nameToSet = props.lastUser?.name?.split(' ')[0] || props.lastUser?.login
        setUserName(nameToSet)
    },[userName])

    React.useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => goBackHandler())
        return () => BackHandler.removeEventListener('hardwareBackPress', () => goBackHandler())
    },[])


    function goBackHandler() {
        if (props.screenNav==='Conversation')
            props.onGoBack(props.title)
        if (props.lastUser)
            props.onRemoveLastUser(props.lastUser) 
        return props.navigation.goBack()
    }
    
    async function goChatHandler() {
        
        // Set user to chat
        // console.log('enviando -> ', props.lastUser?.login)
        await props.onSetUserChat(props.lastUser)

        const params = { chatUser: props.user }
        props.navigation.navigate('ChatTab', params)
        // setTimeout(() => props.navigation.push('Conversation', params), 300)
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
    
    const actualUserName = props.lastUser?.login || props.user?.login

    return (
        <styled.Container>
          <styled.RowContainer>

            <TouchableOpacity onPress={()=>goBackHandler()}>
                <styled.Icon size={23} name='chevron-back' back={true}/> 
            </TouchableOpacity>
            
            { props.chat && (
                <TouchableOpacity onPress={()=>goChatHandler()}>
                    <styled.Icon size={23} name='chatbubble-ellipses'/> 
                </TouchableOpacity>
            )}
            
            { props.screenNav==='ProjectsStack' && (
                <PageName thin={actualUserName} strong='Projects' />
            )}

            { props.screenNav==='AllUserFollowing' && (
                <PageName thin={actualUserName} strong='Following' />
            )}

            { props.screenNav==='AllUserFollowers' && (
                <PageName thin={actualUserName} strong='Followers' />
            )}

            { props.screenNav==='Repository' && (
                <PageName thin='git' strong='Repo' />
            )}
 
            { (props.screenNav==='Conversation') && (
                <PageName thin={props.chatUser?.userName?.split(' ')[0] 
                    || props.userChat?.userName?.split(' ')[0]
                    || 'user'} strong='Chat' />
            )}
        
          </styled.RowContainer>
        </styled.Container>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user,
        userChat: state.userChat?.props,
        title: state.title?.titles[0] || null,
        lastUser: state.lastUser.lastUserViewed[0],
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRedirect: (title) => dispatch(setPageTitle(title)),
        onGoBack: (title) => dispatch(removePageTitle(title)),
        onSetUserChat: (user) => dispatch(setUserChat(user)),
        onRemoveLastUser: (lastUser) => dispatch(removeLastUserViewed(lastUser)),
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav)