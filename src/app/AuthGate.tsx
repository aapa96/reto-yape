import {Fragment, useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {DarkTheme, NavigationContainer, type Theme} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {SignOutButton} from '../capabilities/auth/presentation/components/atoms/SignOutButton/SignOutButton';
import {LoginScreen} from '../capabilities/auth/presentation/screens/LoginScreen/LoginScreen';
import {useAuthStore} from '../capabilities/auth/presentation/state/useAuthStore';
import {colors} from '../shared/design-system/tokens/colors';
import {MainTabNavigator} from './navigation/MainTabNavigator';

const navigationTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background.primary,
    border: colors.border.subtle,
    card: colors.background.elevated,
    primary: colors.accent.cyan,
    text: colors.text.primary,
  },
};

export function AuthGate() {
  const safeAreaInsets = useSafeAreaInsets();
  const status = useAuthStore(state => state.status);
  const bootstrap = useAuthStore(state => state.bootstrap);

  useEffect(() => bootstrap(), [bootstrap]);

  if (status === 'checking') {
    return (
      <View style={styles.loading}>
        <ActivityIndicator color={colors.accent.cyan} size="large" />
      </View>
    );
  }

  if (status !== 'authenticated') {
    return <LoginScreen />;
  }

  return (
    <Fragment>
      <NavigationContainer theme={navigationTheme}>
        <MainTabNavigator />
      </NavigationContainer>
      <View
        pointerEvents="box-none"
        style={[styles.signOutOverlay, {top: safeAreaInsets.top}]}>
        <SignOutButton />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  loading: {
    alignItems: 'center',
    backgroundColor: colors.background.primary,
    flex: 1,
    justifyContent: 'center',
  },
  signOutOverlay: {
    position: 'absolute',
    right: 0,
  },
});
