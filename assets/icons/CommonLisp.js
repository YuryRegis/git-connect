import React from 'react'
import Svg, { Path } from 'react-native-svg'


function CommonLisp({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M372.945 245.464C350.945 305.964 314 370 314 370h-42c9.667-15.667 83-143.5 65.13-198.319-6.313-19.367-21.939-42.845-39.797-68.681l42.014.715C389.967 177.398 425.244 270.133 456 370h-39c-13.42-45.084-27.32-88.81-44.055-124.536zM503.753 256c0 141.385-110.923 256-247.753 256S8.247 397.385 8.247 256 119.17 0 256 0s247.753 114.615 247.753 256zm-298.43 157.463c-17.858-25.836-32.557-50.641-39.796-69.682-17.027-44.781 48.957-171.13 64.54-194.184.757-1.118-.055-2.624-1.405-2.617l-39.032-1.314S151 208.5 129.71 269.999c-16.735-35.727-30.635-79.453-44.054-124.536h-39c30.756 99.866 66.033 193.602 116.653 267.285l42.013.715zm117.179 66.767c8.158.047 17.564.035 25.5-.15C432.358 443.056 491.522 356.672 491.522 256 491.52 121.596 386.074 12.64 256 12.64c-38.99 0-75.764 9.791-108.151 27.12 135.3-11.351 184.31 144.684 103.274 223.69-29.328 28.592-47.373 84.3-29.53 134.17 15.266 42.664 53.36 75.726 100.909 82.61z"></Path>
      </Svg>
    )
}

export default CommonLisp