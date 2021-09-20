import React from 'react'
import Svg, { Path } from 'react-native-svg'


function OCaml({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M80.3 418c-39.7-42.1-63-100.3-62.9-169.7-.1-61.4 19.2-114.1 52.4-154.3H0v324h80.3zM447.3 418.1c17.1-18.3 32.5-39.9 46.4-64.6l-77.1-38.6c-27.1 44-66.7 84.6-121.5 84.8-79.7-.3-111.1-68.4-110.9-156.2h297.9c.4-9.9.4-14.5 0-19.3C484 172 470.2 128.1 445 93.9l-.1.1H512v324l-64.7.1z M189 168.3c3.3-39.7 34.6-66.5 71.4-66.5 37 .1 63.7 26.8 64.6 66.5H189z"></Path>
      </Svg>
    )
}

export default OCaml