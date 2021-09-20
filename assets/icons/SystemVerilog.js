import React from 'react'
import Svg, { Path } from 'react-native-svg'


function Verilog({color='#eee', width=30, height=30}) {
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
        <Path fill={color} d="M19.316 366.603v-216.77c0-12.03 9.752-21.781 21.781-21.781h429.805c12.029 0 21.781 9.752 21.781 21.781v216.77c0 12.029-9.752 21.781-21.781 21.781H41.097c-12.029 0-21.782-9.752-21.782-21.781h.001zm436.648-246.901V70.791h-68.957v48.911h68.957zM387.007 398.11v43.844h68.957V398.11h-68.957zm53.455-336.993L436.118 0h-28.52l-5.089 61.117h37.954-.001zm-37.953 389.767L407.598 512h28.52l4.344-61.116h-37.954.001zm-55.816-331.182V70.791h-68.957v48.911h68.957zM277.736 398.11v43.844h68.957V398.11h-68.957zm53.456-336.993L326.848 0h-28.52l-5.089 61.117h37.954-.001zm-37.954 389.767L298.327 512h28.52l4.344-61.116h-37.954.001zm-55.816-331.182V70.791h-68.957v48.911h68.957zM168.465 398.11v43.844h68.957V398.11h-68.957zm53.456-336.993L217.576 0h-28.52l-5.089 61.117h37.954zm-37.954 389.767L189.056 512h28.52l4.345-61.116h-37.954zm-55.816-331.182V70.791H59.194v48.911h68.957zM59.194 398.11v43.844h68.957V398.11H59.194zM112.65 61.117L108.306 0h-28.52l-5.089 61.117h37.954-.001zM74.696 450.884L79.785 512h28.52l4.344-61.116H74.696zm315.695-149.732c-61.562 69.633-250.387 63.673-286.051-16.529H64.43c28.446 104.449 268.202 108.749 325.961 16.53zm57.179-70.65c-28.446-104.449-268.202-108.75-325.961-16.53 61.562-69.632 250.387-63.672 286.051 16.53h39.91zm-276.66 51.322c.64 0 1.12.16 1.12 1.28.32 4.96 2.56 11.84 6.4 18.08 4.64 7.36 12.48 10.88 20.16 10.88s20-5.12 20-17.76c0-13.28-2.56-17.12-23.36-24.961-4.8-1.76-15.04-6.88-23.2-13.92-5.6-4.96-8-13.44-8-22.72 0-9.76 2.4-16.32 12-23.52 7.2-5.44 13.28-7.681 23.04-7.681 11.68 0 17.92 1.92 21.281 3.2 1.6.64 2.72.32 3.68-.8l2.08-2.08c.64-.64 1.44-.96 2.4-.96 1.12 0 1.44 1.76 1.6 2.72l2.56 27.36c0 .64-.32.8-.8.96l-3.52 1.12c-.8.32-1.6 0-2.08-1.12-1.76-4.64-4.48-10.88-9.92-16.64-4-4.48-8.8-6.72-16-6.72-12 0-16.96 10.4-16.96 14.56 0 5.92.16 10.72 4.16 14.72 4.16 4.321 13.28 8.16 21.12 10.401 7.68 2.24 13.92 6.24 20.48 12.16 6.24 5.6 8.8 12.64 8.8 23.84 0 19.521-13.92 35.362-35.04 35.362-14.4 0-21.921-2.4-28.641-6.88-1.92-1.28-2.88-1.76-3.68-1.76-.96 0-1.6 1.12-2.56 2.72-.96 1.76-1.76 1.92-2.88 1.92-1.76 0-2.4-.8-2.24-2.56l2.56-30.401c.16-1.12.64-1.12 1.28-1.12l4.16.32zm152.848-77.282c0-.8.16-1.12.96-1.12 1.44 0 8.8.48 19.52.48 14.881 0 18.881-.48 20.32-.48.96 0 1.12.32 1.12 1.44v4c0 .64-.16 1.12-1.12 1.12h-3.68c-2.72 0-7.68 1.12-11.84 8.32-6.4 10.88-13.28 29.761-19.36 43.2-4 8.642-22.08 51.522-24.801 56.163-1.12 1.92-1.92 2.72-3.68 2.72-2.08 0-2.72-1.92-3.68-4-5.92-12.64-20.48-51.362-24.96-62.402s-12.48-34.24-14.4-38.72c-1.601-3.681-3.521-5.281-6.881-5.281h-4.16c-.64 0-.8-.8-.8-1.6v-3.84c0-.8.16-1.12 1.12-1.12 1.6 0 6.88.48 26.08.48 16.641 0 23.841-.48 25.28-.48 1.441 0 1.601.48 1.601 1.44v3.68c0 .8-.16 1.44-1.28 1.44h-6.88c-3.84 0-6.88 1.76-6.88 3.84 0 1.28 0 3.2.48 5.44 1.28 5.76 7.36 24.801 10.72 34.081l12.16 35.681h.64c4.64-10.72 12.48-30.721 14.561-36.481 3.04-7.84 8-21.28 10.56-28.48 1.6-4.16 1.6-6.88 1.6-8.8s-1.92-5.281-6.56-5.281h-4.96c-.64 0-.8-.48-.8-1.44v-4z"></Path>
      </Svg>
    )
}

export default Verilog