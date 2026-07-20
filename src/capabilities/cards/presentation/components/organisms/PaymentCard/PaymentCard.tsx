import {memo} from 'react';
import {StyleSheet, View} from 'react-native';

import type {PaymentCard as PaymentCardModel} from '../../../../domain/models/PaymentCard';
import {AppText} from '../../../../../../shared/design-system/components/atoms/AppText/AppText';
import {GradientSurface} from '../../../../../../shared/design-system/components/atoms/GradientSurface/GradientSurface';
import {PrimaryButton} from '../../../../../../shared/design-system/components/atoms/PrimaryButton/PrimaryButton';
import {CardIcon} from '../../../../../../shared/design-system/components/atoms/icons/CardIcon';
import {colors, gradients} from '../../../../../../shared/design-system/tokens/colors';
import {radii} from '../../../../../../shared/design-system/tokens/radii';
import {spacing} from '../../../../../../shared/design-system/tokens/spacing';
import {usePaymentCard} from './usePaymentCard';

interface PaymentCardProps {
  card: PaymentCardModel;
  disabled?: boolean;
  loading?: boolean;
  onViewSensitiveData: (cardId: string) => void;
}

function PaymentCardComponent({
  card,
  disabled,
  loading,
  onViewSensitiveData,
}: PaymentCardProps) {
  const {accessibilityLabel, handleViewSensitiveData} = usePaymentCard({
    card,
    onViewSensitiveData,
  });

  return (
    <GradientSurface
      colors={[...gradients.card]}
      contentStyle={styles.content}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.identity}>
          <View style={styles.iconContainer}>
            <CardIcon color={colors.accent.cyan} />
          </View>
          <AppText style={styles.alias} variant="bodyStrong">
            {card.alias}
          </AppText>
        </View>
        <AppText style={styles.brand} variant="bodyStrong">
          {card.brand}
        </AppText>
      </View>

      <AppText style={styles.pan} tone="secondary" variant="bodyStrong">
        {card.maskedPan}
      </AppText>

      <View style={styles.footer}>
        <AppText tone="secondary" variant="bodyStrong">
          {card.expiry}
        </AppText>
        <PrimaryButton
          accessibilityHint={accessibilityLabel}
          accessibilityLabel={`Ver datos sensibles de ${card.alias}`}
          disabled={disabled}
          label="Ver datos sensibles"
          loading={loading}
          onPress={handleViewSensitiveData}
          showChevron
          testID={`view-sensitive-data-${card.id}`}
        />
      </View>
    </GradientSurface>
  );
}

export const PaymentCard = memo(PaymentCardComponent);

const styles = StyleSheet.create({
  alias: {
    flexShrink: 1,
  },
  brand: {
    fontStyle: 'italic',
  },
  container: {
    borderColor: colors.border.subtle,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  content: {
    gap: spacing.lg,
    padding: spacing.lg,
  },
  footer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
    justifyContent: 'space-between',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.surface.icon,
    borderRadius: radii.md,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
  identity: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    gap: spacing.md,
  },
  pan: {
    letterSpacing: 1.2,
  },
});
