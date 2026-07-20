import type {Account} from './Account';
import type {PaymentCard} from './PaymentCard';

export interface DashboardProducts {
  account: Account;
  cards: readonly PaymentCard[];
}
