import styled from "styled-components/native" 
import Theme from "../../../assets/style/global"


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
    color: ${Theme.secondaryColor};
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-light';
`

export const Company = styled.Text`
    color: ${Theme.secondaryColor};
    font-size: ${Theme.font.size}px;
    font-family: 'roboto-thin';
`