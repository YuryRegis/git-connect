import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const IconSvgColor = Theme.SVG.icon.color
export const ActivityIndicatorColor = Theme.activityIndicator.primary

export const Container = styled.View`
    margin-top: 32px;
    max-height: 95px;
    background-color: transparent;
`

export const RowContainer = styled.View`
    flex-direction: row;

    justify-content: ${({main}) => {
        return main ? 'space-between' : 'flex-start'
    }};

    width: ${Dimensions.get('window').width }px;
`

export const Title = styled.Text`
    font-size: ${Theme.font.size}px;
    color: ${Theme.secondaryColor};

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
    margin: 16px 16px 0px 16px;
`

export const GradientButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`

export const IconContainer = styled.View`
    width: 60px;    
    height: 60px;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
`

export const Icon = styled(Ionicons)`
    color: #fff;
`