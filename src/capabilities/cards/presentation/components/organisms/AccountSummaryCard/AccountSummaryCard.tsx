import {StyleSheet, View} from 'react-native';

import type {Account} from '../../../../domain/models/Account';
import {AppText} from '../../../../../../shared/design-system/components/atoms/AppText/AppText';
import {GradientSurface} from '../../../../../../shared/design-system/components/atoms/GradientSurface/GradientSurface';
import {WalletIcon} from '../../../../../../shared/design-system/components/atoms/icons/WalletIcon';
import {colors, gradients} from '../../../../../../shared/design-system/tokens/colors';
import {radii} from '../../../../../../shared/design-system/tokens/radii';
import {spacing} from '../../../../../../shared/design-system/tokens/spacing';
import {formatPenAmount} from '../../../utils/formatPenAmount';

interface AccountSummaryCardProps {
  account: Account;
}

export function AccountSummaryCard({account}: AccountSummaryCardProps) {
  const formattedBalance = formatPenAmount(account.availableBalance);

  return (
    <GradientSurface
      accessible
      accessibilityLabel={`${account.alias}, ${account.maskedNumber}, saldo disponible ${formattedBalance}`}
      colors={[...gradients.card]}
      contentStyle={styles.content}
      style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <WalletIcon color={colors.accent.cyan} />
        </View>
        <View style={styles.accountInfo}>
          <AppText variant="bodyStrong">{account.alias}</AppText>
          <AppText tone="secondary">{account.maskedNumber}</AppText>
        </View>
      </View>

      <View style={styles.divider} />

      <AppText tone="secondary">Saldo disponible</AppText>
      <AppText style={styles.balance} variant="balance">
        {formattedBalance}
      </AppText>
    </GradientSurface>
  );
}

const styles = StyleSheet.create({
  accountInfo: {
    flex: 1,
    gap: spacing.xxs,
  },
  balance: {
    marginTop: spacing.xxs,
  },
  container: {
    borderColor: colors.border.subtle,
    borderRadius: radii.lg,
    borderWidth: 1,
  },
  content: {
    padding: spacing.lg,
  },
  divider: {
    backgroundColor: colors.border.subtle,
    height: StyleSheet.hairlineWidth,
    marginVertical: spacing.lg,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.md,
  },
  iconContainer: {
    alignItems: 'center',
    backgroundColor: colors.surface.icon,
    borderRadius: radii.md,
    height: 52,
    justifyContent: 'center',
    width: 52,
  },
});
