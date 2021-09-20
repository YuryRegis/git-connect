import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Jsonnet({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M305.044 303.213L214.28 257.83l90.764-45.382 90.763 45.382-90.763 45.382zM107.14 97.12l90.763 45.381 90.764-45.381-90.764-45.382-90.763 45.382zm98.087 148.86l92.493-46.247v-90.763l-92.493 46.246v90.764zM90.763 105.309L0 150.691l90.763 45.381V105.31zm114.464 354.952l91.628-45.814-91.628-44.949v90.763zm214.28 0L512 414.014v-90.762l-92.493 46.246v90.763zm0-214.28L512 199.734v-90.763l-92.493 46.246v90.764zM321.421 97.12l90.762 45.381 90.764-45.381-90.764-45.382-90.762 45.382zm83.438 172.56l-83.438 41.72 83.438 41.72v-83.44zm14.648 83.44l83.44-41.72-83.44-41.72v83.44z"></Path>
      </Svg>
    )
}

export default Jsonnet