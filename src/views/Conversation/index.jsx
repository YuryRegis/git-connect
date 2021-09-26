// @refresh reset
import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import { useRoute } from "@react-navigation/core"
import HeaderNav from "../../components/HeaderNav"
import { GiftedChat } from "react-native-gifted-chat"
import { Bubble, Avatar, Send, InputToolbar, Message } from "react-native-gifted-chat"
import { KeyboardAvoidingView, Platform } from "react-native"


export function Conversation(props) {
    const [messages, setMessages] = React.useState([]);

    const route = useRoute()
    const { chatUser } = route.params
    
  React.useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: chatUser.messages[0],
        createdAt: new Date(),
        user: {
          _id: 2,
          name: chatUser.userName,
          avatar: chatUser.userImg,
        },
      },
    ])
  }, [])

  const onSend = React.useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])

  function bubbleHandler(props) {
    return (
        <Bubble {...props}
            wrapperStyle={{
                right: styled.RightBubble,
                left: styled.LeftBubble
            }}
            textStyle={{ 
                right: {
                    color: styled.RightBubble.text.color,
                    fontFamily: styled.RightBubble.text.font,
                },
                left: {
                    color: styled.LeftBubble.text.color,
                    fontFamily: styled.LeftBubble.text.font,
                }
            }}
            />
    )
  }

  function avatarHandler(props) {
      return (
        <Avatar {...props} imageStyle={styled.AvatarMessage}/>
      )
  }

  function sendHandler(props) {
    return (
        <Send {...props} containerStyle={styled.InputSendButton}>
            <styled.IconView>
                <styled.IconAwesome name='paper-plane' size={23}/>
            </styled.IconView>
        </Send>
    )
  }

  function inputToolBarHandler(props) {
      return (
          <InputToolbar {...props} 
            containerStyle={styled.InputToolbar}
            textInputStyle={styled.InputToolbar.text}
            renderSend={sendHandler}
          />
      )
  }

    function messageHandler(props){
        return (
            <Message {...props}
                renderAvatar={avatarHandler}
            />
        )
    }

    return (
        <styled.Container>

            <HeaderNav screenNav='Conversation' user={chatUser} {...props}/>

            {Platform.OS === "android" && <KeyboardAvoidingView behavior="padding" />}

            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
                renderBubble={bubbleHandler}
                // renderAvatar={avatarHandler}
                renderMessage={messageHandler}
                renderInputToolbar={inputToolBarHandler}
                scrollToBottom={true}
                alwaysShowSend={true}
            />

        </styled.Container>
    )
}

function mapStateToProps(state) {
  return {
    user: state.user,
    chatUser: state.chatUser?.props,
  }
}

export default connect(mapStateToProps,null)(Conversation)