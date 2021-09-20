import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Fortran({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M0 453.581h41.795c23.169 0 45.952-13.099 45.952-45.627V101.555c0-41.212-13.744-45.627-56.427-45.627H2.619V-.001h469.685v203.274h-54.762c0-48.571-5.553-84.056-19.437-110.549-15.273-29.436-46.591-36.795-101.433-36.795H184.963v162.073h21.677c63.289 0 80.061-15.843 78.742-100.257h49.382v262.98h-49.382c-4.416-84.629-9.158-114.839-88.482-113.914h-13.246v141.143c0 41.211 17.099 45.627 59.782 45.627h30.66v55.93H0v-55.93z"></Path>
      </Svg>
    )
}

export default Fortran