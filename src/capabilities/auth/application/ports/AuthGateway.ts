import type {AuthUser} from '../../domain/models/AuthUser';

export interface AuthGateway {
  signInWithEmail(email: string, password: string): Promise<AuthUser>;
  signOut(): Promise<void>;
  onAuthStateChanged(listener: (user: AuthUser | null) => void): () => void;
}
