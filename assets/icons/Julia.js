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
        <Path fill={color} d="M198.185 235.303c-76.74-44.241-76.74-155.445 0-199.686S371.37 46.977 371.37 135.46s-96.445 144.084-173.185 99.843zM230.74 376.54c0-88.483-96.445-144.085-173.185-99.843s-76.74 155.445 0 199.686 173.185-11.36 173.185-99.843zm281.26 0c0-88.483-96.445-144.085-173.185-99.843s-76.74 155.445 0 199.686S512 465.023 512 376.54z"></Path>
      </Svg>
    )
}

export default OCaml