import React from 'react'
import Svg, { Path } from 'react-native-svg'

const HotspotSvg = ({ size, color }: { size: number; color: string }) => {
  return (
    <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.17657 0.545013C2.44989 -0.181671 1.2717 -0.181671 0.545013 0.545013C-0.181671 1.2717 -0.181671 2.44989 0.545013 3.17657L5.27727 7.90883L0.545013 12.6411C-0.181671 13.3678 -0.181671 14.546 0.545013 15.2726C1.2717 15.9993 2.44989 15.9993 3.17657 15.2726L9.22461 9.22461C9.95129 8.49792 9.95129 7.31974 9.22461 6.59305L3.17657 0.545013ZM14.6358 7.78036C15.3625 7.05368 16.5406 7.05368 17.2673 7.78036C17.994 8.50705 17.994 9.68524 17.2673 10.4119L12.5351 15.1442L17.2673 19.8764C17.994 20.6031 17.994 21.7813 17.2673 22.508C16.5406 23.2347 15.3625 23.2347 14.6358 22.508L8.58774 16.46C7.86105 15.7333 7.86105 14.5551 8.58774 13.8284L14.6358 7.78036Z"
        fill={color}
      />
    </Svg>
  )
}

export default HotspotSvg
