import {AuthError} from '../../domain/models/AuthError';
import type {AuthUser} from '../../domain/models/AuthUser';
import type {AuthGateway} from '../ports/AuthGateway';

export async function signInWithEmail(
  email: string,
  password: string,
  gateway: AuthGateway,
): Promise<AuthUser> {
  const trimmedEmail = email.trim();

  if (!trimmedEmail || !password) {
    throw new AuthError(
      'MISSING_FIELDS',
      'Ingresa tu correo y tu contraseña.',
    );
  }

  return gateway.signInWithEmail(trimmedEmail, password);
}
