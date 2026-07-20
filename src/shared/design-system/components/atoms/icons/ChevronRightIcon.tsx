import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function ChevronRightIcon({color, size = 20}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 24 24"
      width={size}>
      <Path
        d="m9 5 7 7-7 7"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.2"
      />
    </Svg>
  );
}
