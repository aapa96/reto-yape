import type {ViewStyle} from 'react-native';

export const shadows = {
  card: {
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 12},
    shadowOpacity: 0.32,
    shadowRadius: 24,
    elevation: 8,
  } satisfies ViewStyle,
} as const;
