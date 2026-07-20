import {StyleSheet, View} from 'react-native';

import {AppText} from '../../atoms/AppText/AppText';
import {ShieldIcon} from '../../atoms/icons/ShieldIcon';
import {colors} from '../../../tokens/colors';
import {spacing} from '../../../tokens/spacing';

interface SecurityNoticeProps {
  message: string;
}

export function SecurityNotice({message}: SecurityNoticeProps) {
  return (
    <View
      accessibilityLabel={message}
      accessibilityRole="text"
      style={styles.container}>
      <ShieldIcon color={colors.accent.cyan} size={22} />
      <AppText style={styles.message} tone="secondary" variant="caption">
        {message}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: spacing.sm,
    justifyContent: 'center',
    paddingHorizontal: spacing.md,
  },
  message: {
    flexShrink: 1,
  },
});
