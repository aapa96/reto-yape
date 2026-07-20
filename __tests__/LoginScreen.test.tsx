import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';

import {LoginScreen} from '../src/capabilities/auth/presentation/screens/LoginScreen/LoginScreen';
import {useAuthStore} from '../src/capabilities/auth/presentation/state/useAuthStore';

const initialMetrics = {
  frame: {height: 852, width: 393, x: 0, y: 0},
  insets: {bottom: 34, left: 0, right: 0, top: 59},
};

const authInstance = (auth as unknown as {__authInstance: {
  signInWithEmailAndPassword: jest.Mock;
}}).__authInstance;

let activeRenderer: ReactTestRenderer.ReactTestRenderer | undefined;

function renderLoginScreen() {
  ReactTestRenderer.act(() => {
    activeRenderer = ReactTestRenderer.create(
      <SafeAreaProvider initialMetrics={initialMetrics}>
        <LoginScreen />
      </SafeAreaProvider>,
    );
  });
  return activeRenderer!;
}

beforeEach(() => {
  authInstance.signInWithEmailAndPassword.mockClear();
  useAuthStore.setState({
    errorMessage: null,
    status: 'signed-out',
    user: null,
  });
});

afterEach(() => {
  ReactTestRenderer.act(() => {
    activeRenderer?.unmount();
  });
  activeRenderer = undefined;
});

test('signs in with the entered email and password', async () => {
  const renderer = renderLoginScreen();

  const emailInput = renderer.root.findByProps({testID: 'login-email-input'});
  const passwordInput = renderer.root.findByProps({
    testID: 'login-password-input',
  });
  const submitButton = renderer.root.findByProps({
    testID: 'login-submit-button',
  });

  ReactTestRenderer.act(() => {
    emailInput.props.onChangeText('demo@iochallenge.com');
    passwordInput.props.onChangeText('secret123');
  });

  await ReactTestRenderer.act(async () => {
    await submitButton.props.onPress();
  });

  expect(authInstance.signInWithEmailAndPassword).toHaveBeenCalledWith(
    'demo@iochallenge.com',
    'secret123',
  );
  expect(useAuthStore.getState().status).toBe('authenticated');
});

test('shows an error message and does not call Firebase when a field is missing', async () => {
  const renderer = renderLoginScreen();

  const submitButton = renderer.root.findByProps({
    testID: 'login-submit-button',
  });

  await ReactTestRenderer.act(async () => {
    await submitButton.props.onPress();
  });

  const errorMessage = renderer.root.findByProps({
    testID: 'login-error-message',
  });

  expect(errorMessage.props.children).toBe('Ingresa tu correo y tu contraseña.');
  expect(authInstance.signInWithEmailAndPassword).not.toHaveBeenCalled();
});
