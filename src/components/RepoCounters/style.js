import styled from "styled-components/native"
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const StarIconColor = Theme.feedCard.star
export const ForkIconColor = Theme.feedCard.fork
export const BugIconColor = Theme.feedCard.bug
export const WatchIconColor = Theme.feedCard.eye


export const Container = styled.View`
    flex-direction: row;
`

export const Icons = styled(Ionicons)`
    color: ${Theme.gradient.quinary};
`

export const ElementContainer = styled.View`
    padding: 8px 5px 0 0;
    flex-direction: row;
`

export const FlatCounterElement = styled.Text`
    font-size: 10px;
    margin-left: 2px;
    color: ${Theme.topProjectsContainer.textCounter};
`

export const FlatTextElement = styled.Text`
    font-size: 10px;
    margin-left: 2px;
    color: ${Theme.primaryColor};
`