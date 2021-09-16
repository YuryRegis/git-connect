import styled from "styled-components/native"
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const Container = styled.View`
    flex-direction: row;
`

export const Icons = styled(Ionicons)`
    color: ${Theme.primaryColor};
`

export const ElementContainer = styled.View`
    padding: 8px 5px 0 0;
    flex-direction: row;
`

export const FlatTextElement = styled.Text`
    font-size: 10px;
    margin-left: 2px;
    color: ${Theme.primaryColor};
`