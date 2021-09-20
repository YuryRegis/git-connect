import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Kotlin({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="-50 -50 600 600"
        xmlSpace="preserve"
        width={width}
        height={height}
    >
        <Path fill={color} d="M27.7 512l241.1-245.3L512 512H27.7zM0 0h256L0 266.7V0zm285.8 0L0 298.7V512L512 0H285.8z"></Path>
      </Svg>
    )
}

export default Kotlin