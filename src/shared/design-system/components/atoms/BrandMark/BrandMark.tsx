import {StyleSheet, View} from 'react-native';

import {AppText} from '../AppText/AppText';
import {colors} from '../../../tokens/colors';

export function BrandMark() {
  return (
    <View
      accessibilityLabel="iO"
      accessibilityRole="image"
      style={styles.container}>
      <AppText style={styles.i} variant="title">
        i
      </AppText>
      <AppText style={styles.o} variant="title">
        O
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  i: {
    color: colors.text.primary,
    fontStyle: 'italic',
    marginRight: -3,
  },
  o: {
    color: colors.accent.cyan,
    fontStyle: 'italic',
  },
});
