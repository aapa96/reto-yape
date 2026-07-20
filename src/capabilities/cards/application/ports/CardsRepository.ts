import type {DashboardProducts} from '../../domain/models/DashboardProducts';

export interface CardsRepository {
  getDashboardProducts(): DashboardProducts;
}
