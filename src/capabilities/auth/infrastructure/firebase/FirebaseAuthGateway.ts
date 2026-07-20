import auth, {
  type FirebaseAuthTypes,
} from '@react-native-firebase/auth';

import {AuthError, type AuthErrorCode} from '../../domain/models/AuthError';
import type {AuthUser} from '../../domain/models/AuthUser';
import type {AuthGateway} from '../../application/ports/AuthGateway';

function toAuthUser(firebaseUser: FirebaseAuthTypes.User): AuthUser {
  return {
    email: firebaseUser.email ?? '',
    uid: firebaseUser.uid,
  };
}

function toAuthError(error: unknown): AuthError {
  const code = (error as {code?: string} | undefined)?.code;

  switch (code) {
    case 'auth/invalid-credential':
    case 'auth/invalid-email':
    case 'auth/user-not-found':
    case 'auth/wrong-password':
      return new AuthError(
        'INVALID_CREDENTIALS',
        'Correo o contraseña incorrectos.',
      );
    case 'auth/too-many-requests':
      return new AuthError(
        'TOO_MANY_ATTEMPTS',
        'Demasiados intentos. Intenta de nuevo más tarde.',
      );
    case 'auth/network-request-failed':
      return new AuthError(
        'NETWORK_ERROR',
        'No hay conexión. Verifica tu red e intenta de nuevo.',
      );
    default:
      return new AuthError(
        'UNKNOWN' satisfies AuthErrorCode,
        'No pudimos iniciar sesión. Intenta de nuevo.',
      );
  }
}

export class FirebaseAuthGateway implements AuthGateway {
  async signInWithEmail(email: string, password: string): Promise<AuthUser> {
    try {
      const credential = await auth().signInWithEmailAndPassword(
        email,
        password,
      );
      return toAuthUser(credential.user);
    } catch (error) {
      throw toAuthError(error);
    }
  }

  async signOut(): Promise<void> {
    await auth().signOut();
  }

  onAuthStateChanged(listener: (user: AuthUser | null) => void): () => void {
    return auth().onAuthStateChanged(firebaseUser => {
      listener(firebaseUser ? toAuthUser(firebaseUser) : null);
    });
  }
}

export const firebaseAuthGateway = new FirebaseAuthGateway();
