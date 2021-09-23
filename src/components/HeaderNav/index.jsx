// @refresh reset
import React from 'react'
import * as styled from './style'
import { connect } from 'react-redux'
import {TouchableOpacity} from 'react-native'
import { setPageTitle, removePageTitle } from '../../store/actions/titles'


function HeaderNav(props){
    const [userName, setUserName] = React.useState('')

    
    React.useEffect(() => {
        const nameToSet = props.lastUser?.name?.split(' ')[0] || props.lastUser?.login
        setUserName(nameToSet)
    },[userName])


    function goBackHandler() {
        if (props.screenNav==='Conversation')
            props.onGoBack(props.title) 
        return props.navigation.goBack()
    }
    
    function goChatHandler() {
        
        props.onRedirect({thin: `${userName}`, bold: 'Chat'})
        const params = { chatUser: props.user }
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
 
            { (props.screenNav==='Conversation') && (
                <PageName thin={props.title?.thin} strong={props.title?.bold} />
            )}
        
          </styled.RowContainer>
        </styled.Container>
    )
}

function mapStateToProps(state) {
    return {
        title: state.title.titles[0],
        lastUser: state.lastUser.lastUserViewed,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onRedirect: (title) => dispatch(setPageTitle(title)),
        onGoBack: (title) => dispatch(removePageTitle(title)),
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav)