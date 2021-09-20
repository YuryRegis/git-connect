import React from "react"
import Svg, { Path } from 'react-native-svg'

function CoffeeScript({color='#eee', width=30, height=30}) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 206"
    >
      <Path
        fill={color}
        d="M101.614 9.071c.233 1.397-.466 2.562-2.794 3.726-3.027-1.63-9.548-2.562-14.903-2.096-5.822.466-10.712 2.329-10.013 6.287.931 3.959 6.52 6.288 16.533 5.356 24.45-2.096 24.217-18.629 60.078-21.889 27.943-2.561 43.544 6.055 45.64 16.533 1.63 8.15-5.123 16.068-25.382 17.698-17.93 1.63-28.409-3.26-29.34-8.15-.466-2.562.931-6.288 9.547-7.219.932 3.959 5.822 8.15 17.465 6.986 8.383-.699 15.368-3.726 14.437-8.383-.931-4.89-9.78-7.685-23.752-6.52-28.409 2.561-35.394 18.163-59.612 20.259C82.287 33.289 68.315 27 66.452 17.687c-.698-3.493-.698-11.643 17.465-13.273 9.314-.699 16.766.931 17.697 4.657zm-90.815 97.336C2.882 116.42-.611 128.062.087 139.473c.699 11.41 6.287 20.724 15.136 27.943 9.314 7.218 19.327 9.314 30.738 7.218 4.424-.698 9.314-3.027 13.738-4.424-9.314 0-17.231-3.027-25.149-9.314-8.615-6.288-14.437-15.136-15.834-25.848-2.096-10.013 0-19.327 5.589-27.477 6.287-7.917 14.437-12.342 25.148-13.739 10.712-.698 20.026 2.096 29.34 8.616-2.095-3.027-5.122-5.123-7.916-7.917-9.315-6.288-19.328-9.315-31.67-6.288-11.177 2.33-20.491 8.15-28.408 18.164zm124.813-53.791c-30.04 0-56.818-3.027-76.146-7.219-20.724-5.123-31.669-10.711-31.669-17.93 0-3.027 1.398-5.589 5.59-8.616-13.041 5.123-20.027 9.315-20.027 15.835.699 7.218 12.342 14.437 36.093 20.026 22.355 5.588 50.997 8.615 85.46 8.615 35.162 0 63.105-3.027 85.46-8.615 23.751-5.589 35.161-13.04 35.161-20.026 0-5.123-5.123-10.013-14.437-13.739 2.096 1.397 3.726 3.726 3.726 6.287 0 7.219-10.712 13.04-32.368 17.93-20.026 4.425-45.64 7.452-76.843 7.452zm85.692 20.026c-22.355 5.123-50.996 8.616-85.46 8.616-35.161 0-63.803-3.726-86.158-8.616C29.66 67.519 18.95 61.93 15.223 56.109c3.726 25.149 12.342 48.9 23.752 69.858 8.616 13.04 17.231 24.45 25.847 36.792 3.726 7.218 6.287 14.437 7.917 21.656 5.589 7.917 13.74 13.04 23.752 15.834 12.342 4.424 25.149 6.287 38.19 5.589h1.396c13.04.698 26.78-1.398 39.354-5.589 9.314-3.027 17.231-7.917 23.053-15.834h.698c1.397-7.22 3.726-14.438 7.219-21.656 8.616-12.342 17.232-23.752 25.847-36.792 11.41-20.725 19.328-44.476 23.752-69.858-4.657 6.52-15.369 12.109-34.696 16.533z"
      ></Path>
    </Svg>
  );
}

export default CoffeeScript;
