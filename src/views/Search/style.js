import { Platform } from 'react-native'
import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


const isAndroid = Platform.OS === 'android'
export const placeholderColor = Theme.input.placeholderColor
export const gradient = Theme.gradient

export const Picker = {
    width: 135,
    height: 40,
    marginLeft: 16,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: `${Theme.search.borderColor}`,

    fontFamily: 'roboto-thin',
    color: `${Theme.primaryColor}`,
}

export const AnimatedCursor = {
    position: 'absolute',
    zIndex: 1,

    width:25,
    height:25,

    marginLeft: -120,
}

export const LottieStyle = {
    width: 200,
    height: 200,
}

export const PickerContainer = styled.View`
    border-width: ${isAndroid ? '1px' : 0};
    border-color: ${isAndroid ? Theme.search.borderColor : 'transparent'};
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

    /* background-color: yellow; */
`

export const InputContainer = styled.View`
    flex-direction: row;
    align-items: center;
    text-align: center;
    /* background-color: red; */
    justify-content: center;
`

export const InputView = styled.View`
    flex-direction: row;
`

export const Input = styled.TextInput`
    
    width: 76%;
    height: ${isAndroid ? 45 : 40}px;
    margin: 16px 0;
    padding: 4px 20px;

    text-align: center;
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-light';
    color: ${Theme.primaryColor};

    border-width: 1px;
    border-radius: 25px;
    border-color: ${Theme.search.borderColor};
`

export const Button = styled.TouchableOpacity`
    margin-left: 16px;
`

export const AbsoluteContent = styled.View`

`

export const SearchButton = styled.TouchableOpacity`   
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 16px;
    /* width: 100%; */
    /* position: absolute; */
    /* z-index: -1; */
    /* background-color: yellow; */
`

export const Icon = styled(Ionicons)`
    color: ${({isBlack}) => isBlack ? 'black' : Theme.search.iconColor};
`

export const SearchContent = styled.View`
    flex: 1;
    width: 100%;
    padding: 0px 2px;
    align-items: center;
    justify-content: center;
`

export const Loading = styled.Text`
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-light';
    color: ${Theme.primaryColor};
    margin: 16px;
`

export const LoadingIndicator = styled.ActivityIndicator`
    padding: 0 16px;
    color: ${Theme.primaryColor};
`

export const EmptyContainer = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const EmptyText = styled.Text`
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-regular';
    color: ${Theme.tertiaryColor};

    margin-bottom: 4px;
`

export const Lottie = styled.View`
    margin-top: -60px;
`