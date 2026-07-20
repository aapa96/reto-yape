import Svg, {Path} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function GiftIcon({color, size = 24}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 24 24"
      width={size}>
      <Path
        d="M3 10h18v11H3V10Zm-1-5h20v5H2V5Zm10 0v16M12 5H8.5a2.5 2.5 0 1 1 2.1-3.9L12 5Zm0 0h3.5a2.5 2.5 0 1 0-2.1-3.9L12 5Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </Svg>
  );
}
