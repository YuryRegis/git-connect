import { Platform } from 'react-native'
import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


const isAndroid = Platform.OS === 'android'
export const placeholderColor = Theme.input.placeholderColor

export const Picker = {
    width: 135,
    height: 40,
    marginLeft: 16,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: `${Theme.primaryColor}`,

    fontFamily: 'roboto-thin',
    color: `${Theme.primaryColor}`,
}

export const PickerContainer = styled.View`
    border-width: ${isAndroid ? '1px' : 0};
    border-color: ${isAndroid ? Theme.primaryColor : 'transparent'};
    border-radius: ${isAndroid ? '25px' : 0};
    
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    font-family: 'roboto-thin';
    margin-left: 16px;
`

export const PickerText = styled.Text`
    color: ${({isSelected})=> isSelected ? placeholderColor : Theme.background};
    font-family: 'roboto-light';
    font-size: ${Theme.font.size}px;

    padding-right: 30px;
`

export const ChevronContainer = styled.View`
    width: 100%;
    flex-direction: row;
    
    position: absolute;
    z-index: -1;

    justify-content: flex-end;
    padding: 0 16px;
`

export const Container = styled.View`
    flex: 1;
    background-color: ${Theme.background};
`

export const RowContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`

export const Input = styled.TextInput`
    width: 220px;
    height: 40px;
    margin: 16px 0;
    padding: 4px 20px;

    font-size: ${Theme.font.size}px;
    font-family: 'roboto-light';
    color: ${Theme.primaryColor};

    border-width: 1px;
    border-radius: 25px;
    border-color: ${Theme.primaryColor};
`

export const Button = styled.TouchableOpacity`
    margin-left: 16px;
`

export const SearchButton = styled.TouchableOpacity`   
    position: absolute;
    z-index: 1;

    padding-right: 16px;
    /* background-color: yellow; */
`

export const Icon = styled(Ionicons)`
    color: ${Theme.primaryColor};
`