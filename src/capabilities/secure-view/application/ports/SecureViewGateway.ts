export interface SecureViewGateway {
  createSecureToken(cardId: string): Promise<string>;
  openSecureView(cardId: string, secureToken: string): Promise<void>;
}
