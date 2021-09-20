import styled from "styled-components/native"
import Theme from "../../../assets/style/global"


export const Container = styled.View`
    flex: 1;
    background-color: ${Theme.background};
`

export const CardContainer = styled.TouchableOpacity`
    width: 100%;
    background-color: #090909;
    /* margin-bottom: 4px; */
`

export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
`

export const UserImageWrapper = styled.View`
    padding: 16px;
    /* background-color: yellow; */
`
export const UserImage = styled.Image`
    height: 50px;
    width: 50px;
    border-radius: 25px;
`

export const UserNameContent = styled.View`
    flex-direction: row;
`

export const UserName = styled.Text`
    font-size: ${Theme.font.size}px;
    font-family: ${({thin}) => thin 
        ? 'roboto-light' 
        : Theme.font.family};
    color: ${Theme.gradient.quinary};

    margin-left: ${({thin}) => thin ? 2 : 0}px;
`

export const UserInfoText = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
`

export const PostTime = styled.Text`
    font-size: 12px;
    font-family: 'roboto-light';
    color: ${Theme.tertiaryColor};
`

export const MessageText = styled.Text`
    font-size: 14px;
    font-family: 'roboto-thin';
    color: white;
    
`

export const TextSection = styled.View`
    /* background-color: red; */
    justify-content: center;
    padding: 16px 16px 16px 0;
    /* margin-left: 10px; */
    width: 300px;
    margin-right: 16px;

    border-bottom-width: 1px;
    border-bottom-color: #393939;
    /* border-bottom-color: ${Theme.gradient.quinary}; */
`