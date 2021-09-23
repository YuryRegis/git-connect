// @refresh reset
import React from "react"
import * as styled from "./style"
import { connect } from "react-redux"
import { useRoute } from "@react-navigation/core"
import HeaderNav from "../../components/HeaderNav"
import { GiftedChat } from "react-native-gifted-chat"
import { Bubble, Avatar, Send, InputToolbar, Message } from "react-native-gifted-chat"
import { KeyboardAvoidingView, LogBox, Platform } from "react-native"
import firebase from 'firebase/app'


LogBox.ignoreLogs(['Setting a timer for a long period of time'])

export function Conversation(props) {
  const [messages, setMessages] = React.useState([])
  
  const route = useRoute()
  const { chatUser } = route.params

  const db = firebase.firestore()
  const chatRef = db.collection(String(props.user.id))


  React.useEffect(() => {
    console.log(messages)

    // Real time update chat
    const subscriber = chatRef.onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        if (change.type === "added") {
          const message = change.doc.data()
          message.createdAt = message.createdAt.toDate()
          setMessages(prevMessages => GiftedChat.append(prevMessages, message))
        }
      }) // end forEach
    }) // end onSnapshot

    return () => subscriber()

    // setMessages([
    //   {
    //     _id: props.user.id,
    //     text: chatUser.messages,
    //     createdAt: new Date(),
    //     user: {
    //       _id: chatUser.id,
    //       name: chatUser.userName,
    //       avatar: chatUser.userImg,
    //     },
    //   },
    // ])
  }, [])


  const onSend = React.useCallback(async (messages = []) => {
    chatRef.doc(Date.now().toString()).set(messages[0])
    // setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
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
                   _id: String(chatUser.id), 
                    name: chatUser.login,
                    avatar: chatUser.html_url || '' ,
                  }}
                renderBubble={bubbleHandler}
                placeholder='Digite sua mensagem...'
                // renderAvatar={avatarHandler}
                minInputToolbarHeight={50}
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
  }
}

export default connect(mapStateToProps,null)(Conversation)