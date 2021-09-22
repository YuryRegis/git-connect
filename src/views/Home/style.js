import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'
import Ionicons from 'react-native-vector-icons/Ionicons'


export const ActivityIndicatorColor = Theme.activityIndicator.primary
export const StarIconColor = Theme.feedCard.star
export const ForkIconColor = Theme.feedCard.fork

export const Container = styled.View`
    flex: 1;
    background-color: ${Theme.background};
`

export const ActivityContent = styled.View`
    flex: 1;

    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.View`
    /* width: 100%; */

    min-height: 200px;

    border-radius: 5px;
    border-bottom-width: 1.3px;
    border-color: ${Theme.feedCard.border};

    margin: 0 8px 0px 8px;
    padding: 9px 16px 9px 16px;
    background-color: ${Theme.feedCard.background};
`

export const CardHeader = styled.View`
    margin-bottom: 9px;

    flex-direction: row;
    justify-content: space-between;
`

export const RowContent = styled.View`
    flex-direction: row;
    justify-content: ${({justify}) => justify
        ? justify : 'flex-start'};
`

export const Author = styled.Text`
    font-size: 15px;
    color: ${Theme.button.text.linkColor};
`

export const Icon = styled(Ionicons)`
    margin-left: 4px;
    color: ${({color}) => color ? color : Theme.primaryColor};
`

export const Counter = styled.Text`
    font-size: 15px;
    margin-left: 4px;
    color: ${Theme.primaryColor};
`

export const Logo = styled.View`
    flex: 1;
    width: 100px;
    justify-content: center;
    align-items: center;
`

export const ProjectName = styled.Text`
    font-size: 15px;
    margin-top: 4px;
    color: ${Theme.feedCard.project};
`

export const InfoContainer = styled.View`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const InfoContent = styled.View`
    margin: 8px 0;
`

export const InfoDescription = styled.Text`
    margin-top: 4px;

    color: ${Theme.feedCard.description};
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-thin';
`

export const InfoTitle = styled.Text`
    margin-top: 10px;
    font-family: ${Theme.font.family};
    font-size: ${Theme.font.size}px;
    color: ${Theme.feedCard.title};
`

export const LanguageView = styled.View`
`

export const GithubButton = styled.TouchableOpacity`
    padding: 9px 7px;
    border-radius: 9px;
    justify-content: center;
    align-items: center;
    margin: 5px 0;
    margin-top: 15px;
    margin-left: 10px;

    background-color: ${Theme.gradient.primary};
`

export const GithubButtonText = styled.Text`
    font-size: 13px;
    color: #EEE;
    font-family: 'roboto-bold';
`

