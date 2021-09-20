import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Haskell({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M0 436.8L120.4 256 0 75.2h90.4L211.5 256 90.4 436.8H0zm120.4 0L240.8 256 120.4 75.2h91.1l240.2 361.6h-90.2l-75.5-114-74.6 114h-91zm291.5-105.6l-40.1-60.3H512v60.3H411.9zm-60.4-90.4l-40-60.3h200.4v60.3H351.5z"></Path>
      </Svg>
    )
}

export default Haskell