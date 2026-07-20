import {ActivityIndicator, Pressable, StyleSheet, View} from 'react-native';

import {AppText} from '../AppText/AppText';
import {GradientSurface} from '../GradientSurface/GradientSurface';
import {ChevronRightIcon} from '../icons/ChevronRightIcon';
import {colors, gradients} from '../../../tokens/colors';
import {layout} from '../../../tokens/layout';
import {radii} from '../../../tokens/radii';
import {spacing} from '../../../tokens/spacing';
import {usePrimaryButton} from './usePrimaryButton';

interface PrimaryButtonProps {
  accessibilityHint?: string;
  accessibilityLabel?: string;
  disabled?: boolean;
  label: string;
  loading?: boolean;
  onPress: () => void;
  showChevron?: boolean;
  testID?: string;
}

export function PrimaryButton({
  accessibilityHint,
  accessibilityLabel,
  disabled,
  label,
  loading,
  onPress,
  showChevron = false,
  testID,
}: PrimaryButtonProps) {
  const {handlePress, isDisabled} = usePrimaryButton({
    disabled,
    loading,
    onPress,
  });

  return (
    <Pressable
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel ?? label}
      accessibilityRole="button"
      accessibilityState={{busy: loading, disabled: isDisabled}}
      disabled={isDisabled}
      onPress={handlePress}
      style={({pressed}) => [
        styles.pressable,
        isDisabled ? styles.disabled : undefined,
        pressed ? styles.pressed : undefined,
      ]}
      testID={testID}>
      <GradientSurface
        colors={[...gradients.primaryAction]}
        contentStyle={styles.gradientContent}
        direction="horizontal"
        style={styles.gradient}>
        {loading ? (
          <ActivityIndicator color={colors.text.inverse} />
        ) : (
          <View style={styles.content}>
            <AppText tone="inverse" variant="button">
              {label}
            </AppText>
            {showChevron ? (
              <ChevronRightIcon color={colors.text.inverse} size={20} />
            ) : null}
          </View>
        )}
      </GradientSurface>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.xs,
    justifyContent: 'center',
  },
  disabled: {
    opacity: 0.45,
  },
  gradient: {
    borderRadius: radii.pill,
  },
  gradientContent: {
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: layout.minimumTouchTarget,
    paddingHorizontal: spacing.lg,
  },
  pressed: {
    opacity: 0.82,
  },
  pressable: {
    borderRadius: radii.pill,
  },
});
