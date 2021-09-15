import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const placeHolderColor = Theme.input.placeholderColor

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${Theme.background};
`

export const LogoIcon = styled(Ionicons)`
    color: ${Theme.primaryColor};
    color: black;
`

export const RowContainer = styled.View`
    flex-direction: row;
`

export const LogoTextBold = styled.Text`
    font-size: 50px;
    color: ${Theme.primaryColor};
    font-family: 'roboto-regular';
`

export const LogoText = styled.Text`
    font-size: 50px;
    color: ${Theme.primaryColor};
    font-family: 'roboto-thin';
`

export const InputContainer = styled.View`
    margin: 16px;
`

export const Input = styled.TextInput`
    width: 250px;
    height: 50px;
    padding: 5px;
    /* padding-left: 25px; */
    margin-bottom: 16px;

    text-align: center;

    border-width: 2px;
    border-radius: 25px;
    border-color: ${Theme.primaryColor};

    font-size: 20px;
    font-family: 'roboto-regular';
    color: ${Theme.primaryColor};

    background-color: ${Theme.background};
`

export const ButtonContainer = styled.View`
    /* width: 250px;
    height: 50px; */
    margin: 5px;
`

export const ButtonText = styled.Text`
    font-size: 30px;
    font-family: 'roboto-regular';
    color: ${Theme.primaryColor};
`