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
    color: ${Theme.Header.tertiary};
`