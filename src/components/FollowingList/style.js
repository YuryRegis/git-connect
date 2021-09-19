import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'

export const Container = styled.View`
    margin-top: 32px;
    background-color: transparent;
`

export const RowContainer = styled.View`
    flex-direction: row;

    justify-content: ${({main}) => {
        return main ? 'space-between' : 'flex-start'
    }};

    width: ${({main}) => {
        return main ? `${Dimensions.get('window').width}px` : 'auto'
    }};
`

export const Title = styled.Text`
    font-size: ${Theme.font.size}px;
    color: ${Theme.primaryColor};

    margin-left: 16px;
    text-transform: capitalize;
`

export const UserCounter = styled.Text`
    font-size: ${Theme.font.size}px;
    color: ${Theme.secondaryColor};
`

export const SeeAllButton = styled.TouchableOpacity`
    justify-content: flex-end;
    align-items: center;
`

export const SeeAllText = styled.Text`
    font-size: 13px;
    margin-right: 16px;
    color: ${Theme.button.text.linkColor};
`

export const FollowersContainer = styled.View`
    height: 60px;
    margin: 16px 16px 0px 16px;
`

export const FlatListContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`


export const AvatarButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const Avatar = styled.Image`
    width: 60px;    
    height: 60px;
    border-radius: 30px;
`