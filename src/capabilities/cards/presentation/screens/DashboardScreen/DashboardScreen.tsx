import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {DashboardTemplate} from '../../components/templates/DashboardTemplate/DashboardTemplate';
import {useDashboardScreen} from './useDashboardScreen';

interface DashboardScreenProps {
  onOpenSecureView: (cardId: string) => Promise<void> | void;
}

export function DashboardScreen({onOpenSecureView}: DashboardScreenProps) {
  const safeAreaInsets = useSafeAreaInsets();
  const {account, cards, handleViewSensitiveData, openingCardId} =
    useDashboardScreen({
      onOpenSecureView,
    });

  return (
    <DashboardTemplate
      account={account}
      cards={cards}
      onViewSensitiveData={handleViewSensitiveData}
      openingCardId={openingCardId}
      safeAreaInsets={safeAreaInsets}
    />
  );
}
