import styled from "styled-components/native"
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


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
    color: ${Theme.primaryColor};
`