import styled from "styled-components/native" 
import Theme from "../../../assets/style/global"
import Ionicons from "react-native-vector-icons/Ionicons"


export const Container = styled.View` 
    flex: 1;
    background-color: ${Theme.background};
    
    align-items: center;
    /* justify-content: center; */
`

export const RowContainer = styled.View`
    margin-top: 16px;
    flex-direction: row;
`

export const UserName = styled.Text`
    color: ${Theme.primaryColor};
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-regular';
`

export const UserLastName = styled.Text`
    color: ${Theme.primaryColor};
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-light';
`

export const Company = styled.Text`
    color: ${Theme.primaryColor};
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-thin';
`

export const TopProjectsContainer = styled.View`
    border-radius: 3px;
    margin: 16px 16px 0 16px;
    padding: 8px;
    width: 95%;

    background-color: ${Theme.topProjectsContainer.primaryColor}; 
`

export const ProjectsContent = styled.View`
    flex: 1;
    justify-content: center;
`

export const Title = styled.Text`
    font-size: ${Theme.font.size}px;
    color: ${Theme.primaryColor};

    text-transform: capitalize;
`

export const scrollContainer = styled.View`
    height: 150px;
    padding: 8px;
`

export const RollFlatContainer = styled.View`
    justify-content: space-between;
    flex-direction: row;
    padding-right: 8px;
`

export const RightContent = styled.View`
    flex-direction: row;
`
export const LeftContent = styled.Text`
    padding: 8px 0 0 8px;

    font-size: 10px;
    /* font-weight: normal; */
    font-family: 'roboto-light';
    color: ${Theme.primaryColor};
`

export const FlatElementTitle = styled.Text`
    padding: 5px 8px 8px 8px;
    text-transform: uppercase;

    font-family: 'roboto-light';
    font-size: ${Theme.font.size}px;
    color: ${Theme.primaryColor};
`