import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function SparklesIcon({color, size = 24}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 32 32"
      width={size}>
      <Path
        d="M16 3c1.2 5.8 4.2 8.8 10 10-5.8 1.2-8.8 4.2-10 10-1.2-5.8-4.2-8.8-10-10 5.8-1.2 8.8-4.2 10-10Zm10 18c.5 2.4 1.6 3.5 4 4-2.4.5-3.5 1.6-4 4-.5-2.4-1.6-3.5-4-4 2.4-.5 3.5-1.6 4-4Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </Svg>
  );
}
