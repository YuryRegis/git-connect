import React from 'react'
import Svg, { Path } from 'react-native-svg'


function R({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M481 233.2C481 150 380.2 82.5 256 82.5S31 150 31 233.2c0 74.2 80 135.9 185.4 148.3v47.9h76.8v-47.6c18.8-2.1 36.9-5.7 53.8-10.8l31.1 58.4h86.7l-52.2-88.1C454.7 314 481 275.7 481 233.2zm-361.5 11.3c0-56.9 76.6-103 171-103s164.1 31.5 164.1 103c0 38.8-20.5 65.8-54.4 82.4-1.9-1.2-3.6-2.2-5-2.9-7.9-4-21.5-8.1-21.5-8.1s67.1-5 67.1-71.8-70.2-68.1-70.2-68.1H216.4v161.3c-57.4-16.6-96.9-51.9-96.9-92.8zm174.3 29.6V231c44.8 0 68-5.3 68 21.1 0 28.4-29.6 22-68 22zm-.7 56.2h20.6c8.4 0 14.6 9.1 18.6 14.9-12.5 1.5-25.6 2.2-39.2 2.2v-17.1z"></Path>
      </Svg>
    )
}

export default R