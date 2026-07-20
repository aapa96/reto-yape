import NativeCardSecureView from '../../../../../specs/NativeCardSecureView';
import type {SecureViewGateway} from '../../application/ports/SecureViewGateway';

function getNativeModule() {
  if (!NativeCardSecureView) {
    throw new Error('NativeCardSecureView no está disponible en esta plataforma.');
  }

  return NativeCardSecureView;
}

export class NativeCardSecureViewGateway implements SecureViewGateway {
  createSecureToken(cardId: string): Promise<string> {
    return getNativeModule().createSecureToken(cardId);
  }

  openSecureView(cardId: string, secureToken: string): Promise<void> {
    return getNativeModule().openSecureView(cardId, secureToken);
  }
}

export const nativeCardSecureViewGateway = new NativeCardSecureViewGateway();
