import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import type {EdgeInsets} from 'react-native-safe-area-context';

import {AppText} from '../../../../../../shared/design-system/components/atoms/AppText/AppText';
import {BrandMark} from '../../../../../../shared/design-system/components/atoms/BrandMark/BrandMark';
import {PrimaryButton} from '../../../../../../shared/design-system/components/atoms/PrimaryButton/PrimaryButton';
import {TextField} from '../../../../../../shared/design-system/components/atoms/TextField/TextField';
import {ShieldIcon} from '../../../../../../shared/design-system/components/atoms/icons/ShieldIcon';
import {colors} from '../../../../../../shared/design-system/tokens/colors';
import {layout} from '../../../../../../shared/design-system/tokens/layout';
import {radii} from '../../../../../../shared/design-system/tokens/radii';
import {spacing} from '../../../../../../shared/design-system/tokens/spacing';

interface LoginTemplateProps {
  email: string;
  errorMessage: string | null;
  isSubmitting: boolean;
  onChangeEmail: (value: string) => void;
  onChangePassword: (value: string) => void;
  onSubmit: () => void;
  password: string;
  safeAreaInsets: EdgeInsets;
}

export function LoginTemplate({
  email,
  errorMessage,
  isSubmitting,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  password,
  safeAreaInsets,
}: LoginTemplateProps) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ios: 'padding', default: undefined})}
      style={styles.screen}>
      <View
        style={[
          styles.content,
          {
            paddingBottom: Math.max(safeAreaInsets.bottom, spacing.lg),
            paddingTop: Math.max(safeAreaInsets.top, spacing.xxl),
          },
        ]}>
        <BrandMark />

        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <ShieldIcon color={colors.accent.cyan} size={32} />
          </View>
          <AppText variant="title">Ingresa a tu cuenta</AppText>
          <AppText tone="secondary" variant="body">
            Usa las credenciales de la cuenta de prueba para continuar.
          </AppText>
        </View>

        <View style={styles.form}>
          <TextField
            accessibilityLabel="Correo electrónico"
            autoCapitalize="none"
            autoComplete="email"
            autoCorrect={false}
            keyboardType="email-address"
            label="Correo electrónico"
            onChangeText={onChangeEmail}
            returnKeyType="next"
            testID="login-email-input"
            textContentType="username"
            value={email}
          />
          <TextField
            accessibilityLabel="Contraseña"
            autoCapitalize="none"
            autoComplete="password"
            autoCorrect={false}
            label="Contraseña"
            onChangeText={onChangePassword}
            onSubmitEditing={onSubmit}
            returnKeyType="go"
            secureTextEntry
            testID="login-password-input"
            textContentType="password"
            value={password}
          />
          {errorMessage ? (
            <AppText
              accessibilityLiveRegion="polite"
              style={styles.error}
              testID="login-error-message"
              variant="caption">
              {errorMessage}
            </AppText>
          ) : null}
        </View>

        <PrimaryButton
          accessibilityHint="Inicia sesión con tu correo y contraseña"
          label="Iniciar sesión"
          loading={isSubmitting}
          onPress={onSubmit}
          testID="login-submit-button"
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  content: {
    alignSelf: 'center',
    flexGrow: 1,
    gap: spacing.xl,
    justifyContent: 'center',
    maxWidth: layout.contentMaxWidth,
    paddingHorizontal: layout.screenHorizontalPadding,
    width: '100%',
  },
  error: {
    color: colors.semantic.error,
  },
  form: {
    gap: spacing.md,
  },
  header: {
    gap: spacing.sm,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.surface.icon,
    borderColor: colors.border.subtle,
    borderRadius: radii.lg,
    borderWidth: 1,
    height: 64,
    justifyContent: 'center',
    marginBottom: spacing.xs,
    width: 64,
  },
  screen: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
});
