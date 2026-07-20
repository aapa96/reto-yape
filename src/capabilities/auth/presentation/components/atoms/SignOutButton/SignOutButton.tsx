import {Pressable, StyleSheet} from 'react-native';

import {AppText} from '../../../../../../shared/design-system/components/atoms/AppText/AppText';
import {spacing} from '../../../../../../shared/design-system/tokens/spacing';
import {useAuthStore} from '../../../state/useAuthStore';

export function SignOutButton() {
  const signOut = useAuthStore(state => state.signOut);

  return (
    <Pressable
      accessibilityLabel="Cerrar sesión"
      accessibilityRole="button"
      hitSlop={spacing.xs}
      onPress={signOut}
      style={styles.button}
      testID="sign-out-button">
      <AppText tone="secondary" variant="caption">
        Cerrar sesión
      </AppText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignSelf: 'flex-end',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
});
