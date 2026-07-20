import type {SecureViewGateway} from '../src/capabilities/secure-view/application/ports/SecureViewGateway';
import {openSecureCardView} from '../src/capabilities/secure-view/application/use-cases/openSecureCardView';

test('creates a short-lived token before opening the native secure view', async () => {
  const calls: string[] = [];
  const gateway: SecureViewGateway = {
    createSecureToken: jest.fn(async cardId => {
      calls.push(`token:${cardId}`);
      return 'signed-demo-token';
    }),
    openSecureView: jest.fn(async (cardId, token) => {
      calls.push(`open:${cardId}:${token}`);
    }),
  };

  await openSecureCardView('card_001', gateway);

  expect(calls).toEqual([
    'token:card_001',
    'open:card_001:signed-demo-token',
  ]);
});
