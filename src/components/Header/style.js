import styled from "styled-components/native"
import Theme from '../../../assets/style/global'
import { Platform, StatusBar } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'


const isAndroid = Platform.OS === 'android'
const StatusBarHeight = isAndroid ? StatusBar.currentHeight : 0

export const Container = styled.View`
    margin-top: ${StatusBarHeight}px;
`

export const RowContainer = styled.View`
    ${({padding}) => padding
        ? `padding: ${padding}px;`
        : null
    }

    flex-direction: row;
    align-items: center;
    justify-content: ${({justify})=> justify};

    background-color: ${Theme.background};
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

    padding-right: 1px;
    color: ${Theme.primaryColor};
`

export const Icon = styled(Ionicons)`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    color: ${Theme.primaryColor};

    margin-right: 3px;
`

export const LogoutText = styled.Text`
    font-size: 19px;
    font-family: 'roboto-regular';
    color: ${Theme.button.text.logoutColor};
`