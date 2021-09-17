import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'


export const Container = styled.View`
    flex: 1;
    margin: 0px 16px;
`

export const ButtonCard = styled.TouchableOpacity`
    width: 100%;
`

export const GradientColors = {
    primary: Theme.gradient.primary,
    secondary: Theme.gradient.secondary,
}

export const HeaderContent = styled.View`
    /* width: 100%; */
    flex-direction: row;
    margin: 4px 8px;
    justify-content: space-between;
`

export const Language = styled.Text`
    font-size: 10px;
    font-family: 'roboto-regular';
    color: ${Theme.primaryColor};
    margin-left: 8px;
    align-self: flex-end;
`

export const Content = styled.View`
    width: 100%;
    flex-direction: row;
    margin-bottom: 16px;

    align-items: center;
`

export const RepoInfoContent = styled.View`
    max-width: 300px;
    padding-left: 16px;

    border-left-width: 1px;
    border-left-color: ${Theme.primaryColor};
`

export const Image = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    
    align-self: center;
    margin: 16px;
`
    
export const RepoName = styled.Text`
    width: 100%;
    font-size: ${Theme.font.size}px;
    color: ${Theme.primaryColor};
    /* margin: 0 0 0 25px; */
`

export const RepoDescription = styled.Text`
    width: 100%; 
    font-size: ${Theme.font.size - 2}px;
    font-family: 'roboto-light';
    color: ${Theme.primaryColor};
`