import {MockCardsRepository} from '../src/capabilities/cards/infrastructure/repositories/MockCardsRepository';

test('exposes only masked card data to the React Native layer', () => {
  const repository = new MockCardsRepository();
  const products = repository.getDashboardProducts();
  const serializedProducts = JSON.stringify(products);

  expect(products.cards).toHaveLength(2);
  expect(products.cards[0].maskedPan).toBe('•••• •••• •••• 1234');
  expect(serializedProducts).not.toContain('4111 1111 1111 1234');
  expect(serializedProducts).not.toContain('"cvv"');
});
