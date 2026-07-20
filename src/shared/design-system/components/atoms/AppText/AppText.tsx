import type {PropsWithChildren} from 'react';
import {StyleSheet, Text, type TextProps} from 'react-native';

import {colors} from '../../../tokens/colors';
import {
  typography,
  type TypographyVariant,
} from '../../../tokens/typography';

type TextTone = keyof typeof colors.text;

interface AppTextProps extends TextProps {
  align?: 'auto' | 'center' | 'justify' | 'left' | 'right';
  tone?: TextTone;
  variant?: TypographyVariant;
}

export function AppText({
  align = 'left',
  children,
  style,
  tone = 'primary',
  variant = 'body',
  ...textProps
}: PropsWithChildren<AppTextProps>) {
  return (
    <Text
      {...textProps}
      allowFontScaling
      style={[
        styles.base,
        typography[variant],
        {color: colors.text[tone], textAlign: align},
        style,
      ]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  base: {
    fontFamily: undefined,
  },
});
