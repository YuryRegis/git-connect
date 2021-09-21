import styled from "styled-components/native"
import Theme from "../../../assets/style/global"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import { YellowBox } from "react-native"


export const RightBubble = {
    backgroundColor: Theme.gradient.primary,
    borderRadius: 50,
    padding: 3,
    text: {
        color: Theme.primaryColor,
        font: Theme.font.family
    }
}

export const LeftBubble = {
    // backgroundColor: Theme.gradient.secondary,
    backgroundColor: '#292929',
    borderRadius: 50,
    padding: 3,
    text: {
        color: Theme.primaryColor,
        font: Theme.font.family
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