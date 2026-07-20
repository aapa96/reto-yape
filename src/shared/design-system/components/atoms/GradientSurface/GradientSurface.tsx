import type {PropsWithChildren} from 'react';
import {
  StyleSheet,
  View,
  type StyleProp,
  type ViewProps,
  type ViewStyle,
} from 'react-native';
import Svg, {
  Defs,
  LinearGradient as SvgLinearGradient,
  Rect,
  Stop,
} from 'react-native-svg';

interface GradientSurfaceProps extends ViewProps {
  colors: readonly [string, string];
  contentStyle?: StyleProp<ViewStyle>;
  direction?: 'diagonal' | 'horizontal';
  style?: StyleProp<ViewStyle>;
}

export function GradientSurface({
  children,
  colors,
  contentStyle,
  direction = 'diagonal',
  style,
  ...viewProps
}: PropsWithChildren<GradientSurfaceProps>) {
  const isHorizontal = direction === 'horizontal';

  return (
    <View {...viewProps} style={[styles.container, style]}>
      <Svg
        height="100%"
        pointerEvents="none"
        preserveAspectRatio="none"
        style={StyleSheet.absoluteFill}
        width="100%">
        <Defs>
          <SvgLinearGradient
            id="surface-gradient"
            x1="0%"
            x2="100%"
            y1="0%"
            y2={isHorizontal ? '0%' : '100%'}>
            <Stop offset="0%" stopColor={colors[0]} />
            <Stop offset="100%" stopColor={colors[1]} />
          </SvgLinearGradient>
        </Defs>
        <Rect
          fill="url(#surface-gradient)"
          height="100%"
          width="100%"
          x="0"
          y="0"
        />
      </Svg>
      <View style={contentStyle}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
  },
});
