import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function ActivityIcon({color, size = 24}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 24 24"
      width={size}>
      <Path
        d="M4 19V9m6 10V5m6 14v-7m4 7H2"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
