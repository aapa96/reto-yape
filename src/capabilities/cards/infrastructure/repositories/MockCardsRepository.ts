import type {CardsRepository} from '../../application/ports/CardsRepository';
import type {DashboardProducts} from '../../domain/models/DashboardProducts';

const dashboardProducts: DashboardProducts = {
  account: {
    id: 'acc_101',
    alias: 'Cuenta principal',
    maskedNumber: '•••• 0101',
    availableBalance: 8420.5,
    currency: 'PEN',
  },
  cards: [
    {
      id: 'card_001',
      accountId: 'acc_101',
      alias: 'Crédito Visa',
      brand: 'VISA',
      kind: 'credit',
      maskedPan: '•••• •••• •••• 1234',
      expiry: '12/28',
    },
    {
      id: 'card_002',
      accountId: 'acc_101',
      alias: 'Débito',
      brand: 'VISA',
      kind: 'debit',
      maskedPan: '•••• •••• •••• 5678',
      expiry: '09/29',
    },
  ],
};

export class MockCardsRepository implements CardsRepository {
  getDashboardProducts(): DashboardProducts {
    return dashboardProducts;
  }
}
