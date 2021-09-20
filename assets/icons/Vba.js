import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Vba({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 10 100 100"
        xmlSpace="preserve"
        width={width}
        height={height}
    >
        <Path fill={color} d="M50,80.3l43-12.5V20H3v47.8l43,12.5C47,80.6,49,80.6,50,80.3z M64,36h17v4h-6v20h-5V40h-6V36z M47,36h15v4H52v5h8v5h-8v5   h10v5H47V36z M17.6,60c-1.8,0-3.1-1.4-3.1-3.3c0-1.9,1.3-3.4,3.1-3.4c1.8,0,3.1,1.4,3.1,3.4C20.8,58.6,19.5,60,17.6,60z M43,60   h-5.6l-6-11.8L29.1,43h-0.1c0.2,2,1.1,5.4,1.1,8.2V60h-5V36h5l6,11.8l2.3,5.2h0.1c-0.2-3-0.4-5.9-0.4-8.7V36h5V60z"></Path>
      </Svg>
    )
}

export default Vba