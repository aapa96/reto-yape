import {useCallback} from 'react';

import {openSecureCardView} from '../../../../capabilities/secure-view/application/use-cases/openSecureCardView';
import {nativeCardSecureViewGateway} from '../../../../capabilities/secure-view/infrastructure/native/NativeCardSecureViewGateway';
import {useSecureViewEvents} from '../../../../capabilities/secure-view/presentation/hooks/useSecureViewEvents';

export function useDashboardTabScreen() {
  useSecureViewEvents();

  const handleOpenSecureView = useCallback(async (cardId: string) => {
    await openSecureCardView(cardId, nativeCardSecureViewGateway);
  }, []);

  return {handleOpenSecureView};
}
