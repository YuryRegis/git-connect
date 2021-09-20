import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Swift({color='#eee', width=30, height=30}) {
    return (
    <Svg
        xmlns="http://www.w3.org/2000/Svg"
        x="0"
        y="0"
        enableBackground="new 0 0 512 512"
        version="1.1"
        viewBox="0 0 512 512"
        xmlSpace="preserve"
        height={height}
        width={width}
      >
        <Path fill={color} d="M469 348.7c1.2-2.4 1.2-4.8 2.4-7.2C500.1 229 431.9 97.4 314.7 28.1c51.4 69.3 71.7 151.9 53.8 226.1-1.1 6-3.6 13.2-6 19.2-3.2-1.8-6.5-3.8-9.6-6 0 0-116-71.7-240.4-197.4-3.6-3.6 67 100.5 145.9 183.1-37.1-21.6-142.3-96.9-208.2-157.9 7.2 13.1 18 26.2 28.8 39.4 55 70.6 126.8 156.7 212.9 222.5-61 37.2-145.9 39.5-232.1 0-21.5-9.5-39.5-21.5-59.8-35.8 35.9 56.2 92.2 107.6 159.2 135.2 80.2 34.7 161.5 32.3 220.1 0h1.3c2.3-1.2 4.7-2.4 7.2-4.8 28.7-14.4 84.9-29.9 116 29.9 8.3 16.7 23.8-61-34.8-132.9z"></Path>
      </Svg>
    )
}

export default Swift