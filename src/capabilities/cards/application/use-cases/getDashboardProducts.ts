import type {CardsRepository} from '../ports/CardsRepository';

export function getDashboardProducts(repository: CardsRepository) {
  return repository.getDashboardProducts();
}
