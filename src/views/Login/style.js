import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const primaryColor = Theme.gradient.primary
export const secondaryColor = Theme.gradient.secondary
export const placeHolderColor = Theme.input.placeholderColor


export const AnimateLogo = {
    width:200, 
    height:200, 
    borderRadius:100, 
    justifyContent:'center', 
    alignItems:'center'
}

export const AnimateLogoView = {
    marginBottom: 5,
    height: 200, 
    width: 200, 
}

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    
    background-color: ${Theme.background};
`

export const LogoIcon = styled(Ionicons)`
    color: black;
`

export const RowContainer = styled.View`
    flex-direction: row;
    margin-top: 10px;
`

export const LogoTextBold = styled.Text`
    font-size: 50px;
    color: ${Theme.quaternaryColor};
    font-family: 'roboto-regular';
`

export const LogoText = styled.Text`
    font-size: 50px;
    color: ${Theme.quaternaryColor};
    font-family: 'roboto-thin';
`

export const InputContainer = styled.View`
    margin: 59px 16px 16px 16px;
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
    border-color: ${Theme.gradient.quinary};

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
    color: ${Theme.secondaryColor};
`

export const AbsoluteContainer = styled.View`
    height: 100%;
    justify-content: flex-end;
    padding-bottom: 150px;
    position: absolute;
`

export const ActivityContent = styled.View`
    flex: 1;
    position: relative;
    /* background-color: red; */
    justify-content: flex-end;
`