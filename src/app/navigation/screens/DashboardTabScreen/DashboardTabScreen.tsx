import {DashboardScreen} from '../../../../capabilities/cards/presentation/screens/DashboardScreen/DashboardScreen';
import {useDashboardTabScreen} from './useDashboardTabScreen';

export function DashboardTabScreen() {
  const {handleOpenSecureView} = useDashboardTabScreen();

  return <DashboardScreen onOpenSecureView={handleOpenSecureView} />;
}
