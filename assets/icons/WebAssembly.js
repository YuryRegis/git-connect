import React from 'react'
import Svg, { Path } from 'react-native-svg'


function WebAssembly({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M14.745 0v.129a2.752 2.752 0 11-5.504 0V0H0v24h24V0h-9.255zm-3.291 21.431l-1.169-5.783h-.02l-1.264 5.783H7.39l-1.824-8.497h1.59l1.088 5.783h.02l1.311-5.783h1.487l1.177 5.854h.02l1.242-5.854h1.561l-2.027 8.497h-1.581zm8.755 0l-.542-1.891h-2.861l-.417 1.891h-1.59l2.056-8.497h2.509l2.5 8.497h-1.655zm-2.397-6.403l-.694 3.118h2.159l-.796-3.118h-.669z"></Path>
      </Svg>
    )
}

export default WebAssembly