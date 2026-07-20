import {StyleSheet, View} from 'react-native';

import {AppText} from '../../atoms/AppText/AppText';
import {spacing} from '../../../tokens/spacing';

interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({title}: SectionHeaderProps) {
  return (
    <View accessibilityRole="header" style={styles.container}>
      <AppText variant="heading">{title}</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.md,
  },
});
