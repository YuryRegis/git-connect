import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Default({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 131 -131 512 512"
        version="1.1"
        viewBox="131 -131 512 512"
        xmlSpace="preserve"
        width={width}
        height={height}
    >
      {/* <g> */}
        <Path fill={color} d="M321.1 243.1L203 125 321.1 6.9l-36.4-35.6L131 125l153.7 153.7 36.4-35.6zm132.6 0L571.8 125 453.7 6.9l35.6-35.6L643 125 489.3 278.7l-35.6-35.6z"></Path>
      {/* </g> */}
    </Svg>
    )
}

export default Default