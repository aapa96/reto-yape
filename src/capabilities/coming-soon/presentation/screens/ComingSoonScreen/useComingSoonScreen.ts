import {useSafeAreaInsets} from 'react-native-safe-area-context';

import type {ComingSoonFeature} from '../../../../../app/navigation/MainTabParamList';

const contentByFeature = {
  benefits: {
    description:
      'Estamos preparando beneficios y experiencias exclusivas para ti.',
    eyebrow: 'BENEFICIOS',
  },
  movements: {
    description:
      'Muy pronto podrás consultar y organizar todos tus movimientos desde aquí.',
    eyebrow: 'MOVIMIENTOS',
  },
  profile: {
    description:
      'Estamos construyendo un espacio para administrar tus preferencias.',
    eyebrow: 'PERFIL',
  },
} as const;

export function useComingSoonScreen(feature: ComingSoonFeature) {
  const safeAreaInsets = useSafeAreaInsets();

  return {
    ...contentByFeature[feature],
    safeAreaInsets,
  };
}
