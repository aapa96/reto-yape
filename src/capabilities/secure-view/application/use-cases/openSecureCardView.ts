import type {SecureViewGateway} from '../ports/SecureViewGateway';

export async function openSecureCardView(
  cardId: string,
  gateway: SecureViewGateway,
): Promise<void> {
  const secureToken = await gateway.createSecureToken(cardId);
  await gateway.openSecureView(cardId, secureToken);
}
