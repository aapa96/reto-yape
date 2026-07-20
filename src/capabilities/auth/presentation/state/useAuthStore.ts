import {create} from 'zustand';

import {signInWithEmail} from '../../application/use-cases/signInWithEmail';
import {AuthError} from '../../domain/models/AuthError';
import type {AuthUser} from '../../domain/models/AuthUser';
import {firebaseAuthGateway} from '../../infrastructure/firebase/FirebaseAuthGateway';

export type AuthStatus =
  | 'authenticated'
  | 'authenticating'
  | 'checking'
  | 'signed-out';

interface AuthState {
  errorMessage: string | null;
  status: AuthStatus;
  user: AuthUser | null;
  bootstrap: () => () => void;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  errorMessage: null,
  status: 'checking',
  user: null,

  bootstrap: () =>
    firebaseAuthGateway.onAuthStateChanged(user => {
      set({
        errorMessage: null,
        status: user ? 'authenticated' : 'signed-out',
        user,
      });
    }),

  signIn: async (email, password) => {
    set({errorMessage: null, status: 'authenticating'});
    try {
      const user = await signInWithEmail(email, password, firebaseAuthGateway);
      set({errorMessage: null, status: 'authenticated', user});
    } catch (error) {
      const message =
        error instanceof AuthError
          ? error.message
          : 'No pudimos iniciar sesión. Intenta de nuevo.';
      set({errorMessage: message, status: 'signed-out', user: null});
    }
  },

  signOut: async () => {
    await firebaseAuthGateway.signOut();
    set({errorMessage: null, status: 'signed-out', user: null});
  },
}));
