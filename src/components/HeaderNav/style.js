import styled from "styled-components/native"
import Theme from '../../../assets/style/global'
import { Platform, StatusBar } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons'


const isAndroid = Platform.OS === 'android'
const StatusBarHeight = isAndroid ? StatusBar.currentHeight : 0

export const Container = styled.View`
    margin-top: ${StatusBarHeight}px;
`

export const RowContainer = styled.View`
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;

    border-bottom-color: ${Theme.background};
    background-color: ${Theme.background};
`

export const ChevronButton = styled.TouchableOpacity`
    margin-left: 16px;
`

export const ChatButton = styled.TouchableOpacity`
    margin-right: 16px;
`

export const Icon = styled(Ionicons)`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    color: ${({back})=> back ? 
        Theme.Header.tertiary
        : Theme.gradient.quinary};
        
`

export const LogoTextContainer = styled.View`
    flex-direction: row;
    color: ${Theme.primaryColor};
`

export const LogoLabelStrong = styled.Text`
    font-size: 19px;
    font-family: 'roboto-regular';

    margin-right: ${({padding})=>padding?16:0}px;

    color: ${Theme.primaryColor};
`

export const LogoLabelThin = styled.Text`
    font-size: 19px;
    font-family: 'roboto-thin';

    color: ${Theme.primaryColor};
`