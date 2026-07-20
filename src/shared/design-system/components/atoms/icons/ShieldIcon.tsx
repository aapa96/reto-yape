import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function ShieldIcon({color, size = 24}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 28 32"
      width={size}>
      <Path
        d="M14 2 25 6v8.6c0 7.1-4.3 12.7-11 15.4C7.3 27.3 3 21.7 3 14.6V6l11-4Z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
      <Path
        d="m9.2 15.7 3.1 3.1 6.7-7"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.3"
      />
    </Svg>
  );
}
