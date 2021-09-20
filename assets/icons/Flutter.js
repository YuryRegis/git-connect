import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Flutter({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns='http://www.w3.org/2000/Svg'
        x='0'
        y='0'
        enableBackground='new 0 0 512 512'
        version='1.1'
        viewBox='20 0 550 550'
        xmlSpace='preserve'
        width={width}
        height={height}
      >
        <Path fill={color} d='M305.3 0L49.1 256l78.9 78.9L462.6.3H305.7l-.4-.3zm.4 236.2L167.6 373.9 305.7 512H463L325.1 374l137.8-137.8H305.7z'></Path>
      </Svg>
    )
}

export default Flutter