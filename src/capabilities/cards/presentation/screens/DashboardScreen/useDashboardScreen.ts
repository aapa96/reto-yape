import {useCallback, useMemo, useState} from 'react';

import {getDashboardProducts} from '../../../application/use-cases/getDashboardProducts';
import {MockCardsRepository} from '../../../infrastructure/repositories/MockCardsRepository';

interface UseDashboardScreenParams {
  onOpenSecureView: (cardId: string) => Promise<void> | void;
}

const cardsRepository = new MockCardsRepository();

export function useDashboardScreen({
  onOpenSecureView,
}: UseDashboardScreenParams) {
  const products = useMemo(
    () => getDashboardProducts(cardsRepository),
    [],
  );
  const [openingCardId, setOpeningCardId] = useState<string | null>(null);

  const handleViewSensitiveData = useCallback(
    async (cardId: string) => {
      if (openingCardId) {
        return;
      }

      setOpeningCardId(cardId);
      try {
        await onOpenSecureView(cardId);
      } finally {
        setOpeningCardId(null);
      }
    },
    [onOpenSecureView, openingCardId],
  );

  return {
    ...products,
    handleViewSensitiveData,
    openingCardId,
  };
}
