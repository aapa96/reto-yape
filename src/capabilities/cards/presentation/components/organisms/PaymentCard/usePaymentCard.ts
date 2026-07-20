import {useCallback, useMemo} from 'react';

import type {PaymentCard} from '../../../../domain/models/PaymentCard';

interface UsePaymentCardParams {
  card: PaymentCard;
  onViewSensitiveData: (cardId: string) => void;
}

export function usePaymentCard({
  card,
  onViewSensitiveData,
}: UsePaymentCardParams) {
  const accessibilityLabel = useMemo(
    () =>
      `${card.alias}, tarjeta terminada en ${card.maskedPan.slice(-4)}, vence ${card.expiry}`,
    [card.alias, card.expiry, card.maskedPan],
  );

  const handleViewSensitiveData = useCallback(() => {
    onViewSensitiveData(card.id);
  }, [card.id, onViewSensitiveData]);

  return {accessibilityLabel, handleViewSensitiveData};
}
