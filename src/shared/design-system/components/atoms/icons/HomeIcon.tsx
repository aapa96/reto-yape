import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function HomeIcon({color, size = 24}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 24 24"
      width={size}>
      <Path
        d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1V10Z"
        fill="none"
        stroke={color}
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
