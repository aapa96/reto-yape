import {StyleSheet, View} from 'react-native';
import type {EdgeInsets} from 'react-native-safe-area-context';

import {AppText} from '../../../../../../shared/design-system/components/atoms/AppText/AppText';
import {BrandMark} from '../../../../../../shared/design-system/components/atoms/BrandMark/BrandMark';
import {SparklesIcon} from '../../../../../../shared/design-system/components/atoms/icons/SparklesIcon';
import {colors} from '../../../../../../shared/design-system/tokens/colors';
import {layout} from '../../../../../../shared/design-system/tokens/layout';
import {radii} from '../../../../../../shared/design-system/tokens/radii';
import {spacing} from '../../../../../../shared/design-system/tokens/spacing';

interface ComingSoonTemplateProps {
  description: string;
  eyebrow: string;
  safeAreaInsets: EdgeInsets;
}

export function ComingSoonTemplate({
  description,
  eyebrow,
  safeAreaInsets,
}: ComingSoonTemplateProps) {
  return (
    <View
      style={[
        styles.screen,
        {
          paddingTop: Math.max(safeAreaInsets.top, spacing.lg),
        },
      ]}>
      <BrandMark />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <SparklesIcon color={colors.accent.cyan} size={36} />
        </View>
        <View style={styles.pill}>
          <AppText tone="secondary" variant="label">
            {eyebrow}
          </AppText>
        </View>
        <AppText align="center" variant="title">
          Próximamente
        </AppText>
        <AppText align="center" style={styles.description} tone="secondary">
          {description}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    paddingBottom: spacing.xxxl,
  },
  description: {
    maxWidth: 310,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.surface.icon,
    borderColor: colors.border.subtle,
    borderRadius: radii.lg,
    borderWidth: 1,
    height: 76,
    justifyContent: 'center',
    marginBottom: spacing.lg,
    width: 76,
  },
  pill: {
    backgroundColor: colors.surface.primary,
    borderColor: colors.border.subtle,
    borderRadius: radii.pill,
    borderWidth: 1,
    marginBottom: spacing.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
  },
  screen: {
    backgroundColor: colors.background.primary,
    flex: 1,
    paddingHorizontal: layout.screenHorizontalPadding,
  },
});
