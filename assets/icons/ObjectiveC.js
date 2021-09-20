import Svg, { Path } from 'react-native-svg'
import React from "react"


function ObjectiveC({color='#eee', width=30, height=30}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/Svg"
      width={width}
      height={height}
    >
      <Path fill={color} d="M31.912 64C14.717 64 .135 49.476.001 32.17A31.54 31.54 0 019.214 9.665 32.07 32.07 0 0131.996 0a31.62 31.62 0 0122.447 9.322A31.68 31.68 0 0164 31.702C64.08 49.4 49.858 63.82 32.172 64zm.1-62.325a30.4 30.4 0 00-21.584 9.172 29.88 29.88 0 00-8.753 21.308c.126 16.4 13.946 30.153 30.228 30.153h.218c16.77-.152 30.268-13.825 30.203-30.597a29.996 29.996 0 00-9.063-21.2 29.85 29.85 0 00-21.249-8.837zM7.18 41.36V22.665h4.548v1.675H9.315v15.378h2.412v1.675zm15.435-9.532c0 3.4-2.07 5.352-4.875 5.352s-4.674-2.186-4.674-5.176c0-3.124 1.96-5.327 4.824-5.327s4.724 2.295 4.724 5.15zm-7.588.15c0 2.07 1.04 3.7 2.823 3.7s2.806-1.675 2.806-3.786c0-1.918-.946-3.727-2.806-3.727S15 29.927 15 32.02zM24.2 27.03a15.51 15.51 0 012.697-.226 4.814 4.814 0 012.915.645 2.144 2.144 0 011.055 1.9 2.36 2.36 0 01-1.675 2.203 2.562 2.562 0 012.052 2.513 2.64 2.64 0 01-.98 2.094c-.72.637-1.918.946-3.77.946a17.93 17.93 0 01-2.278-.134zm1.843 4.012h.946c1.28 0 2.002-.603 2.002-1.466s-.72-1.4-1.9-1.4a5.04 5.04 0 00-1.055.075zm0 4.674c.326.034.653.048.98.042 1.2 0 2.245-.452 2.245-1.675s-1.022-1.675-2.303-1.675h-.92zm8.85-8.82h1.85v6.6c0 2.806-1.357 3.744-3.35 3.744a4.95 4.95 0 01-1.566-.268l.226-1.5a4.06 4.06 0 001.147.184c1.055 0 1.675-.486 1.675-2.245zm7.12 5.503v1.282H38.16V32.4zM51 36.753a6.424 6.424 0 01-2.622.452c-3.225 0-5.185-2.02-5.185-5.1a5.11 5.11 0 015.427-5.369 5.88 5.88 0 012.513.452l-.4 1.474a4.95 4.95 0 00-1.993-.394c-2.07 0-3.56 1.298-3.56 3.744 0 2.228 1.315 3.67 3.543 3.67a5.17 5.17 0 002.02-.377zm5.812-14.138V41.36h-4.548v-1.675h2.412V24.3h-2.412v-1.675z"/>
    </Svg>
  );
}

export default ObjectiveC
