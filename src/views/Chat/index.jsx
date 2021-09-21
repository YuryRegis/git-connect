import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import { FlatList } from "react-native"
import Header from "../../components/Header"

import Messages from "./data"
'#202020'

export function Chat({navigation}) {

    function FlatListHandler({item}) {
        const username = item.userName.split(' ')
        // console.log('Message -> ', item.message)
        
        function onPressCardHandler() {
            const navProps = { chatUser: item } 
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
                        
                        <styled.MessageText>{item.message}</styled.MessageText>

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



export default connect(null,null)(Chat)