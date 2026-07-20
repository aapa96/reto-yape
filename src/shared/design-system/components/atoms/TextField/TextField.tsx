import {StyleSheet, TextInput, View, type TextInputProps} from 'react-native';

import {colors} from '../../../tokens/colors';
import {radii} from '../../../tokens/radii';
import {spacing} from '../../../tokens/spacing';
import {typography} from '../../../tokens/typography';
import {AppText} from '../AppText/AppText';

interface TextFieldProps extends TextInputProps {
  label: string;
}

export function TextField({label, style, ...inputProps}: TextFieldProps) {
  return (
    <View style={styles.container}>
      <AppText tone="secondary" variant="label">
        {label}
      </AppText>
      <TextInput
        {...inputProps}
        placeholderTextColor={colors.text.secondary}
        style={[styles.input, style]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.xs,
  },
  input: {
    ...typography.body,
    backgroundColor: colors.surface.primary,
    borderColor: colors.border.subtle,
    borderRadius: radii.md,
    borderWidth: 1,
    color: colors.text.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },
});
