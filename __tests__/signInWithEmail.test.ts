import {signInWithEmail} from '../src/capabilities/auth/application/use-cases/signInWithEmail';
import {AuthError} from '../src/capabilities/auth/domain/models/AuthError';
import type {AuthGateway} from '../src/capabilities/auth/application/ports/AuthGateway';

function createGateway(): AuthGateway {
  return {
    onAuthStateChanged: jest.fn(() => jest.fn()),
    signInWithEmail: jest.fn(async (email, password) => ({
      email,
      uid: `uid-for-${email}-${password}`,
    })),
    signOut: jest.fn(async () => undefined),
  };
}

test('trims the email and delegates to the gateway', async () => {
  const gateway = createGateway();

  const user = await signInWithEmail('  demo@iochallenge.com  ', 'secret123', gateway);

  expect(gateway.signInWithEmail).toHaveBeenCalledWith(
    'demo@iochallenge.com',
    'secret123',
  );
  expect(user.email).toBe('demo@iochallenge.com');
});

test('rejects with a domain error when a field is missing', async () => {
  const gateway = createGateway();

  await expect(signInWithEmail('', 'secret123', gateway)).rejects.toThrow(
    AuthError,
  );
  expect(gateway.signInWithEmail).not.toHaveBeenCalled();
});
