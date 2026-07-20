export type AuthErrorCode =
  | 'INVALID_CREDENTIALS'
  | 'MISSING_FIELDS'
  | 'NETWORK_ERROR'
  | 'TOO_MANY_ATTEMPTS'
  | 'UNKNOWN';

export class AuthError extends Error {
  readonly code: AuthErrorCode;

  constructor(code: AuthErrorCode, message: string) {
    super(message);
    this.code = code;
    this.name = 'AuthError';
  }
}
