import {
  FlatList,
  StyleSheet,
  View,
} from 'react-native';
import type {EdgeInsets} from 'react-native-safe-area-context';

import type {Account} from '../../../../domain/models/Account';
import type {PaymentCard as PaymentCardModel} from '../../../../domain/models/PaymentCard';
import {BrandMark} from '../../../../../../shared/design-system/components/atoms/BrandMark/BrandMark';
import {AppText} from '../../../../../../shared/design-system/components/atoms/AppText/AppText';
import {SectionHeader} from '../../../../../../shared/design-system/components/molecules/SectionHeader/SectionHeader';
import {SecurityNotice} from '../../../../../../shared/design-system/components/molecules/SecurityNotice/SecurityNotice';
import {colors} from '../../../../../../shared/design-system/tokens/colors';
import {layout} from '../../../../../../shared/design-system/tokens/layout';
import {spacing} from '../../../../../../shared/design-system/tokens/spacing';
import {AccountSummaryCard} from '../../organisms/AccountSummaryCard/AccountSummaryCard';
import {useDashboardTemplate} from './useDashboardTemplate';

interface DashboardTemplateProps {
  account: Account;
  cards: readonly PaymentCardModel[];
  onViewSensitiveData: (cardId: string) => void;
  openingCardId: string | null;
  safeAreaInsets: EdgeInsets;
}

export function DashboardTemplate({
  account,
  cards,
  onViewSensitiveData,
  openingCardId,
  safeAreaInsets,
}: DashboardTemplateProps) {
  const {keyExtractor, listData, renderCard} = useDashboardTemplate({
    cards,
    onViewSensitiveData,
    openingCardId,
  });

  return (
    <View style={styles.screen}>
      <FlatList
        ListFooterComponent={
          <SecurityNotice message="Tus datos se muestran de forma segura y temporal." />
        }
        ListHeaderComponent={
          <View>
            <BrandMark />
            <AppText style={styles.title} variant="display">
              Mis productos
            </AppText>
            <AccountSummaryCard account={account} />
            <View style={styles.sectionHeader}>
              <SectionHeader title="Mis tarjetas" />
            </View>
          </View>
        }
        contentContainerStyle={[
          styles.content,
          {
            paddingBottom: Math.max(safeAreaInsets.bottom, spacing.lg),
            paddingTop: Math.max(safeAreaInsets.top, spacing.lg),
          },
        ]}
        data={listData}
        ItemSeparatorComponent={CardSeparator}
        keyExtractor={keyExtractor}
        renderItem={renderCard}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

function CardSeparator() {
  return <View style={styles.cardSeparator} />;
}

const styles = StyleSheet.create({
  cardSeparator: {
    height: spacing.md,
  },
  content: {
    alignSelf: 'center',
    maxWidth: layout.contentMaxWidth,
    paddingHorizontal: layout.screenHorizontalPadding,
    width: '100%',
  },
  screen: {
    backgroundColor: colors.background.primary,
    flex: 1,
  },
  sectionHeader: {
    marginTop: spacing.xxl,
  },
  title: {
    marginBottom: spacing.xl,
    marginTop: spacing.xl,
  },
});
