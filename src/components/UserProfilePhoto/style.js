import React from 'react'
import styled from 'styled-components/native'
import Theme from '../../../assets/style/global'



export const Avatar = styled.Image`
    width: ${({size})=> size.width}px;
    height: ${({size})=> size.height}px;
    border-radius: ${({size})=> size.width/2}px;
`

export const RoundedBorder = styled.View`
    background-color: transparent;
    width: ${({size})=> size.width}px;
    height: ${({size})=> size.height}px;
    overflow: hidden;

    border-radius: ${({size})=> size.width/2}px;
    border-color: black;
    border-width: 2px;
    /* border-color: linear-gradient(148.57deg, #F13D3D 18.97%, #8D44AD 79.23%); */
`
export const InfoIcon = styled.View`
    position: absolute;
    top: 75px;
    right: -5px;
    height: 32px;
    width: 32px;
    border-radius: 16px;
    background-color: red;
    border-color: #000;
    /* z-index: 1;     */
`
export const Container = styled.View`
    flex-direction: column;
    align-items: flex-end;
`