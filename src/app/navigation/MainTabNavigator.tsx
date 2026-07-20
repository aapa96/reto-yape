import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';

import {ComingSoonScreen} from '../../capabilities/coming-soon/presentation/screens/ComingSoonScreen/ComingSoonScreen';
import {colors} from '../../shared/design-system/tokens/colors';
import {spacing} from '../../shared/design-system/tokens/spacing';
import {TabBarIcon} from './components/TabBarIcon/TabBarIcon';
import type {MainTabParamList} from './MainTabParamList';
import {DashboardTabScreen} from './screens/DashboardTabScreen/DashboardTabScreen';

const Tab = createBottomTabNavigator<MainTabParamList>();

const sharedScreenOptions: BottomTabNavigationOptions = {
  animation: 'none',
  headerShown: false,
  lazy: true,
  sceneStyle: {backgroundColor: colors.background.primary},
  tabBarActiveTintColor: colors.accent.cyan,
  tabBarInactiveTintColor: colors.text.secondary,
  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: '600',
    marginTop: spacing.xxs,
  },
  tabBarStyle: {
    backgroundColor: colors.background.elevated,
    borderTopColor: colors.border.subtle,
    borderTopWidth: 1,
    paddingTop: spacing.xs,
  },
};

type TabIconRenderer = NonNullable<BottomTabNavigationOptions['tabBarIcon']>;

const renderHomeIcon: TabIconRenderer = ({color, size}) => (
  <TabBarIcon color={color} routeName="Home" size={size} />
);

const renderMovementsIcon: TabIconRenderer = ({color, size}) => (
  <TabBarIcon color={color} routeName="Movements" size={size} />
);

const renderBenefitsIcon: TabIconRenderer = ({color, size}) => (
  <TabBarIcon color={color} routeName="Benefits" size={size} />
);

const renderProfileIcon: TabIconRenderer = ({color, size}) => (
  <TabBarIcon color={color} routeName="Profile" size={size} />
);

const homeOptions: BottomTabNavigationOptions = {
  tabBarAccessibilityLabel: 'Ir a Inicio',
  tabBarIcon: renderHomeIcon,
  tabBarLabel: 'Inicio',
};

const movementsOptions: BottomTabNavigationOptions = {
  tabBarAccessibilityLabel: 'Ir a Movimientos',
  tabBarIcon: renderMovementsIcon,
  tabBarLabel: 'Movimientos',
};

const benefitsOptions: BottomTabNavigationOptions = {
  tabBarAccessibilityLabel: 'Ir a Beneficios',
  tabBarIcon: renderBenefitsIcon,
  tabBarLabel: 'Beneficios',
};

const profileOptions: BottomTabNavigationOptions = {
  tabBarAccessibilityLabel: 'Ir a Perfil',
  tabBarIcon: renderProfileIcon,
  tabBarLabel: 'Perfil',
};

export function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={sharedScreenOptions}>
      <Tab.Screen
        component={DashboardTabScreen}
        name="Home"
        options={homeOptions}
      />
      <Tab.Screen
        component={ComingSoonScreen}
        initialParams={{feature: 'movements'}}
        name="Movements"
        options={movementsOptions}
      />
      <Tab.Screen
        component={ComingSoonScreen}
        initialParams={{feature: 'benefits'}}
        name="Benefits"
        options={benefitsOptions}
      />
      <Tab.Screen
        component={ComingSoonScreen}
        initialParams={{feature: 'profile'}}
        name="Profile"
        options={profileOptions}
      />
    </Tab.Navigator>
  );
}
