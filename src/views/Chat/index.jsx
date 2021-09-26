import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import { FlatList } from "react-native"
import Header from "../../components/Header"
import { setUserChat } from "../../store/actions/userChat"

import Messages from "./data"


export function Chat({navigation, onSetUserChat}) {

    function FlatListHandler({item}) {
        const username = item.userName.split(' ')
        // console.log('Message -> ', item.message)
        
        function onPressCardHandler() {
            const navProps = { chatUser: item }
            onSetUserChat(item)
            navigation.push('Conversation', navProps)
        }
        
        return (
            <styled.CardContainer onPress={onPressCardHandler}>
                <styled.UserInfo>

                    <styled.UserImageWrapper>
                        <styled.UserImage source={item.userImg} />  
                    </styled.UserImageWrapper>

                    <styled.TextSection>

                        <styled.UserInfoText>

                            <styled.UserNameContent>

                                <styled.UserName>{username[0]}</styled.UserName>
                                <styled.UserName thin>{username[1]}</styled.UserName>

                            </styled.UserNameContent>
                            
                            <styled.PostTime>{item.messageTime}</styled.PostTime>

                        </styled.UserInfoText>
                        
                        <styled.MessageText>{item.messages[0]}</styled.MessageText>

                    </styled.TextSection>

                </styled.UserInfo>
            </styled.CardContainer>
        )
    }

    return (
        <styled.Container>
            <Header screenTab='ChatTab'/>

            <FlatList 
                data={Messages}
                keyExtractor={(item) => String(item.id)}
                renderItem={FlatListHandler}
            />

        </styled.Container>
    )
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onSetUserChat: (user) => dispatch(setUserChat(user)),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)