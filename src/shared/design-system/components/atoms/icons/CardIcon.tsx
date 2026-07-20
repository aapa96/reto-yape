import Svg, {Path, Rect} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function CardIcon({color, size = 28}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 32 32"
      width={size}>
      <Rect
        height="21"
        rx="4"
        stroke={color}
        strokeWidth="2.4"
        width="27"
        x="2.5"
        y="5.5"
      />
      <Path d="M3 12h26" stroke={color} strokeWidth="2.4" />
      <Path
        d="M21.5 21h3"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2.4"
      />
    </Svg>
  );
}
