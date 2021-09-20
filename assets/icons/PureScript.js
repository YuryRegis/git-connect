import React from 'react'
import Svg, { Path } from 'react-native-svg'


function PureScript({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
        width={width}
        height={height}
    >
        <Path fill={color} d="M19.16 4.6l-1.24 1.24 3.97 3.97-3.97 3.97 1.24 1.24 4.58-4.6a.87.87 0 000-1.23L19.16 4.6zM6.95 6.74l1.87 1.75h8.23l-1.87-1.75H6.95zm-2.1 2.24l-4.6 4.6a.87.87 0 000 1.23l4.6 4.59 1.23-1.24-3.97-3.97 3.97-3.97-1.24-1.24zm3.97 2.14l-1.87 1.76h8.23l1.87-1.76H8.82zm-1.87 4.39l1.87 1.75h8.23l-1.87-1.75H6.95z"></Path>
      </Svg>
    )
}

export default PureScript