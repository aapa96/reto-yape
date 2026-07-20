import Svg, {Circle, Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function UserIcon({color, size = 24}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 24 24"
      width={size}>
      <Circle
        cx="12"
        cy="8"
        fill="none"
        r="4"
        stroke={color}
        strokeWidth="2"
      />
      <Path
        d="M4 21a8 8 0 0 1 16 0"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
