import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Puppet({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        width={width}
        height={height}
    >
        <Path fill={color} d="M140.7 461h51v-51h-51v51zm0-359.1h51V51h-51v50.9zm281.6 230.5V179.6h-117l-62.8-62.8V0H89.7v152.9h116.9l62.7 62.7v81l-.1-.1-62.7 62.7H89.7V512h152.9V395.2l62.7-62.7h117z"></Path>
      </Svg>
    )
}

export default Puppet