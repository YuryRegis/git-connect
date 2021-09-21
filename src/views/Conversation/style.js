import styled from "styled-components/native"
import Theme from "../../../assets/style/global"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { YellowBox } from "react-native"


export const RightBubble = {
    backgroundColor: Theme.gradient.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    text: {
        color: Theme.primaryColor,
        font: 'roboto-light'
    }
}

export const LeftBubble = {
    // backgroundColor: Theme.gradient.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 50,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    text: {
        color: Theme.primaryColor,
        font: 'roboto-light'
    }
}

export const AvatarMessage = {
    height: 35,
    width: 35,
    borderWidth: 1,
}

export const InputToolbar = {
    borderRadius: 50,
    borderWidth: 1.3,
    paddingLeft: 16,
    marginTop: 10,
    borderTopColor: Theme.chatInputToolBar.borderColor,
    backgroundColor: Theme.chatInputToolBar.color,
    borderColor: Theme.chatInputToolBar.borderColor,
    text: {
        color: Theme.chatInputToolBar.textColor,
    }
}

export const InputSendButton = {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 16,
}

export const Container = styled.View`
    flex: 1;
    /* background-color: #191919; */
    background-color: #000;
`

export const IconView = styled.View`
    justify-content: center;
    align-items: center;
`

export const IconAwesome = styled(FontAwesome)`
    color: ${Theme.primaryColor};
    color: #1adc20;
`