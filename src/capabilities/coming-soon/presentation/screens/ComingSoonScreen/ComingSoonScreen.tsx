import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

import type {
  ComingSoonRouteName,
  MainTabParamList,
} from '../../../../../app/navigation/MainTabParamList';
import {ComingSoonTemplate} from '../../components/templates/ComingSoonTemplate/ComingSoonTemplate';
import {useComingSoonScreen} from './useComingSoonScreen';

type ComingSoonScreenProps = BottomTabScreenProps<
  MainTabParamList,
  ComingSoonRouteName
>;

export function ComingSoonScreen({route}: ComingSoonScreenProps) {
  const {description, eyebrow, safeAreaInsets} = useComingSoonScreen(
    route.params.feature,
  );

  return (
    <ComingSoonTemplate
      description={description}
      eyebrow={eyebrow}
      safeAreaInsets={safeAreaInsets}
    />
  );
}
