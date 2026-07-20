export type CardBrand = 'VISA';
export type CardKind = 'credit' | 'debit';

export interface PaymentCard {
  id: string;
  accountId: string;
  alias: string;
  brand: CardBrand;
  kind: CardKind;
  maskedPan: string;
  expiry: string;
}
