import styled from "styled-components/native" 
import Theme from "../../../assets/style/global"


export const Container = styled.View` 
    flex: 1;
    background-color: ${Theme.background};

    align-items: center;
    justify-content: center;
`

export const Text = styled.Text`
    color: ${Theme.primaryColor};
    font-size: ${Theme.font.size}px;
    font-family: ${Theme.font.family};
`