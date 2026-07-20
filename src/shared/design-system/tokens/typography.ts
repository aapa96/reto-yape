import type {TextStyle} from 'react-native';

type TypographyToken = Pick<
  TextStyle,
  'fontSize' | 'fontWeight' | 'letterSpacing' | 'lineHeight'
>;

export const typography = {
  display: {
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -1.1,
    lineHeight: 43,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: 34,
  },
  heading: {
    fontSize: 22,
    fontWeight: '700',
    letterSpacing: -0.2,
    lineHeight: 28,
  },
  body: {
    fontSize: 16,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 23,
  },
  bodyStrong: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 23,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.4,
    lineHeight: 18,
  },
  caption: {
    fontSize: 13,
    fontWeight: '400',
    letterSpacing: 0,
    lineHeight: 18,
  },
  button: {
    fontSize: 16,
    fontWeight: '600',
    letterSpacing: 0,
    lineHeight: 20,
  },
  balance: {
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -0.8,
    lineHeight: 44,
  },
} satisfies Record<string, TypographyToken>;

export type TypographyVariant = keyof typeof typography;
