import {
  createSecureToken,
  openSecureView,
} from '@aranzatech/react-native-card-secure-view';

import type {SecureViewGateway} from '../../application/ports/SecureViewGateway';

export class NativeCardSecureViewGateway implements SecureViewGateway {
  createSecureToken(cardId: string): Promise<string> {
    return createSecureToken(cardId);
  }

  openSecureView(cardId: string, secureToken: string): Promise<void> {
    return openSecureView(cardId, secureToken);
  }
}

export const nativeCardSecureViewGateway = new NativeCardSecureViewGateway();
