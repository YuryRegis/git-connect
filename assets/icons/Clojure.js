import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Clojure({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M245.3 260.6c-2.5 5.5-5.4 11.7-8.2 18.3-10.3 23.3-21.7 51.6-25.8 69.8-1.5 6.5-2.4 14.5-2.4 23.4 0 3.5.2 7.2.5 11 14.5 5.4 30.2 8.3 46.6 8.3 14.9 0 29.3-2.5 42.7-7-3.2-2.9-6.1-5.9-8.9-9.4-18.3-23.2-28.4-57.2-44.5-114.4zM255.9 0c-4.8 0-9.6.2-14.3.4l-1.8.1-5.6.5-2.6.2-5.2.6-2.8.3-5 .7-3 .4-4.8.8-3 .5-4.8 1-3 .6-4.8 1.1-2.9.7-4.8 1.3-2.8.8-4.8 1.4-2.7.9-4.8 1.6-2.5.9-4.9 1.8-2.2.8-5.1 2-1.8.7-5.4 2.4-.5.5c-11 5-21.5 10.8-31.6 17.2l-.8.5-5.1 3.4-1.3.9-4.7 3.3-1.5 1.1-4.5 3.4-1.6 1.3-4.3 3.4-1.6 1.2-4.1 3.5-1.7 1.5-4 3.6-1.7 1.5-3.9 3.7-1.5 1.5-3.8 3.8-1.5 1.6-3.7 4-1.4 1.6-3.7 4.1-1.2 1.4-3.7 4.5-.9 1.1-4.5 5.7-.3.4L48 107c24.2-15.1 48.8-20.6 70.4-20.4 29.8.1 53.2 9.3 64.4 15.6 2.7 1.6 5.3 3.3 7.8 5 20-8.8 42.2-13.8 65.5-13.8 89.8 0 162.6 72.8 162.7 162.6 0 45.3-18.5 86.2-48.4 115.7 7.3.8 15.1 1.3 23.1 1.3 28.4 0 59-6.2 82-25.6 15-12.6 27.5-31.1 34.5-58.8 1.4-10.7 2.1-21.6 2.1-32.7C512 114.6 397.4 0 256 0h-.1zm117.9 411.3c-17.9-2.2-32.7-5-45.7-9.5-21.8 10.8-46.3 16.9-72.2 16.9-89.8 0-162.6-72.8-162.6-162.6 0-48.7 21.5-92.4 55.5-122.3-9.1-2.2-18.6-3.5-28.2-3.5-47.7.4-98.1 26.8-119 98.1l-.6 4.9-.1 1.7-.3 3.6-.2 3.4-.2 5.1-.1 1.8c-.1 2.4-.1 4.7-.1 7.1 0 141.4 114.6 256 256 256h.1c2.7 0 5.4-.1 8.1-.1l2.8-.1 5.3-.3 3.4-.3 4.7-.4 3.6-.4 4.4-.5 3.7-.5 4.2-.6 3.8-.6 4.1-.7 3.8-.8 3.9-.8 3.8-.9 3.8-.9 3.9-1 3.7-1 3.9-1.2 3.6-1.1 3.9-1.3 3.5-1.2 3.9-1.5 3.4-1.3 3.9-1.6 3.3-1.4 3.9-1.7 3.1-1.4 3.9-1.9 3-1.5 3.9-2 2.9-1.5 3.9-2.1 2.7-1.6 3.9-2.3 2.6-1.6 4-2.5 2.4-1.6 4-2.7 2.2-1.6 4-2.9 2-1.5 4.1-3.1 1.8-1.4 4.2-3.4 1.5-1.2 4.4-3.8 1-.9 4.7-4.3.3-.3 5.1-4.9 1.9-1.9 3.1-3.2 2.2-2.3 2.6-2.8 2.3-2.6 2.2-2.6 2.5-2.9 1.9-2.3 2.6-3.3.9-1.2c2.4-3.1 4.7-6.2 7-9.4-25.1 6.3-49.2 9.2-69.8 9.3-7.6-.1-14.9-.5-21.6-1.3zm-48.1-49.6c1.6.8 5.2 2.1 10.2 3.5 33.6-24.6 55.4-64.3 55.4-109.1-.1-74.7-60.6-135.2-135.4-135.4-14.9 0-29.1 2.5-42.5 6.9 27.5 31.3 40.7 76.1 53.5 125.1v.1s4.1 13.6 11.1 31.6c6.9 18 16.8 40.2 27.6 56.4 7.1 10.7 14.8 18.5 20.1 20.9zM178.1 145.4c-34.7 24.5-57.5 64.9-57.6 110.6.1 45.1 22.1 85 56 109.5 8.3-34.6 29.1-66.3 60.4-129.8-1.9-5.1-4-10.7-6.3-16.5-8.7-21.7-21.1-46.9-32.3-58.3-5.7-5.9-12.6-11.1-20.2-15.5z"></Path>
      </Svg>
    )
}

export default Clojure