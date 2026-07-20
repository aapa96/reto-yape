import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {LoginTemplate} from '../../components/templates/LoginTemplate/LoginTemplate';
import {useLoginScreen} from './useLoginScreen';

export function LoginScreen() {
  const safeAreaInsets = useSafeAreaInsets();
  const {
    email,
    errorMessage,
    handleSubmit,
    isSubmitting,
    password,
    setEmail,
    setPassword,
  } = useLoginScreen();

  return (
    <LoginTemplate
      email={email}
      errorMessage={errorMessage}
      isSubmitting={isSubmitting}
      onChangeEmail={setEmail}
      onChangePassword={setPassword}
      onSubmit={handleSubmit}
      password={password}
      safeAreaInsets={safeAreaInsets}
    />
  );
}
