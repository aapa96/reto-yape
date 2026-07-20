import Svg, {Path, Rect} from 'react-native-svg';

import type {IconProps} from './IconTypes';

export function WalletIcon({color, size = 28}: IconProps) {
  return (
    <Svg
      accessibilityElementsHidden
      height={size}
      importantForAccessibility="no-hide-descendants"
      viewBox="0 0 32 32"
      width={size}>
      <Path
        d="M6 9.5V7.7A3.7 3.7 0 0 1 9.7 4h13.8v5.5"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
      <Rect
        fill="none"
        height="19"
        rx="4"
        stroke={color}
        strokeWidth="2.4"
        width="25"
        x="4"
        y="9"
      />
      <Path
        d="M22 16h7v7h-7a3.5 3.5 0 0 1 0-7Z"
        fill="none"
        stroke={color}
        strokeWidth="2.4"
      />
    </Svg>
  );
}
