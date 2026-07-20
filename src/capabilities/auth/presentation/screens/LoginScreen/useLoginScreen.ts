import {useCallback, useState} from 'react';

import {useAuthStore} from '../../state/useAuthStore';

export function useLoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const errorMessage = useAuthStore(state => state.errorMessage);
  const status = useAuthStore(state => state.status);
  const signIn = useAuthStore(state => state.signIn);

  const isSubmitting = status === 'authenticating';

  const handleSubmit = useCallback(() => {
    if (isSubmitting) {
      return;
    }
    signIn(email, password);
  }, [email, isSubmitting, password, signIn]);

  return {
    email,
    errorMessage,
    handleSubmit,
    isSubmitting,
    password,
    setEmail,
    setPassword,
  };
}
