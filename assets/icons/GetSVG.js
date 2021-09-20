import React from 'react'
import Languages from './index.js'
import Svg, { Path } from 'react-native-svg'


function GetSVG({name='Default', color='#eee', width=30, height=30}) {
    
    const IconPath = Languages[name]?.icon
    return (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        x="0"
        y="0"
        enableBackground="new 0 0 255 255"
        version="1.1"
        viewBox="0 0 255 255"
        xmlSpace="preserve"
        width={width}
        height={height}
    >
        <Path fillRule="evenodd" fill={color} d={IconPath}></Path>
      </Svg>
    )
}

export default GetSVG