import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Elixir({color='#eee', width=30, height=30}) {
    return (
        <Svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <Path fill={color} d="M19.789 16.578c0 3.75-2.926 7.422-7.739 7.422-5.246 0-7.839-3.708-7.839-8.285 0-5.207 3.89-12.946 7.995-15.639a.397.397 0 01.611.371 9.712 9.712 0 001.692 6.514c.522.795 1.092 1.477 1.763 2.351.94 1.226 1.636 1.905 2.642 3.84l.015.028a7.104 7.104 0 01.86 3.398z"></Path>
        </Svg>
    )
}

export default Elixir