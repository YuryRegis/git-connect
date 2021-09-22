import styled from "styled-components/native"
import Theme from "../../../assets/style/global"
import Ionicons from "react-native-vector-icons/Ionicons"




export const Container = styled.View`
    flex: 1;
    /* justify-content: center; */
    /* align-items: center; */
    background-color: ${Theme.background};
`

export const CardContainer = styled.TouchableOpacity`
    width: 33%;
    background-color: ${Theme.userCard.background};
    /* height:200px; */
`

export const NameContent = styled.View`
    flex-direction: row;
    padding-bottom: 16px;
`

export const UserName = styled.Text`
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-light';
    color: ${Theme.userCard.text};
`

export const LastName = styled.Text`
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-thin';
    color: ${Theme.userCard.text};
`

export const HeadContainer = styled.View`
    align-items: center;
`

export const Avatar = styled.Image`
    width: 70px;
    height: 70px;
    margin: 16px 0 8px 0;
    
    border-width: 1.3px;
    border-color: ${Theme.userCard.border};
    border-radius: 35px;
`

export const BodyContainer = styled.View`
    position: absolute;
    margin-left: 55%;
    padding-top: 67%;
`

export const Icon = styled(Ionicons)`
    color: ${Theme.text};
`

export const TagContainer = styled.View`
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background-color: ${Theme.gradient.quaternary};
    padding: 1px 1px;
`

export const Tag = styled.Text`
    color: white;
    font-size: 13px;
    font-family: 'roboto-bold';
`