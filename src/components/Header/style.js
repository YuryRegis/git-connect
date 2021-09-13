import styled from "styled-components/native"
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const RowContainer = styled.View`
    padding: 16px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;

    background-color: ${Theme.background};
`

export const LogoTextContainer = styled.View`
    flex-direction: row;
    color: ${Theme.primaryColor};
`

export const LogoLabelStrong = styled.Text`
    font-size: 19px;
    font-family: 'roboto-regular';

    color: ${Theme.primaryColor};
`

export const LogoLabelThin = styled.Text`
    font-size: 19px;
    font-family: 'roboto-thin';

    color: ${Theme.primaryColor};
`

export const Icon = styled(Ionicons)`
    width: ${({size}) => size}px;
    height: ${({size}) => size}px;
    color: ${Theme.primaryColor};

    margin-right: 3px;
`