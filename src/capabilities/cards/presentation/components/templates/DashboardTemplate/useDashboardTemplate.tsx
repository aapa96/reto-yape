import {useCallback, useMemo} from 'react';
import type {ListRenderItem} from 'react-native';

import type {PaymentCard as PaymentCardModel} from '../../../../domain/models/PaymentCard';
import {PaymentCard} from '../../organisms/PaymentCard/PaymentCard';

interface UseDashboardTemplateParams {
  cards: readonly PaymentCardModel[];
  onViewSensitiveData: (cardId: string) => void;
  openingCardId: string | null;
}

export function useDashboardTemplate({
  cards,
  onViewSensitiveData,
  openingCardId,
}: UseDashboardTemplateParams) {
  const listData = useMemo(() => [...cards], [cards]);

  const keyExtractor = useCallback((card: PaymentCardModel) => card.id, []);

  const renderCard = useCallback<ListRenderItem<PaymentCardModel>>(
    ({item}) => (
      <PaymentCard
        card={item}
        disabled={openingCardId !== null && openingCardId !== item.id}
        loading={openingCardId === item.id}
        onViewSensitiveData={onViewSensitiveData}
      />
    ),
    [onViewSensitiveData, openingCardId],
  );

  return {keyExtractor, listData, renderCard};
}
