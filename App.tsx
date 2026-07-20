import {StatusBar} from 'react-native';
import {DarkTheme, NavigationContainer, type Theme} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {MainTabNavigator} from './src/app/navigation/MainTabNavigator';
import {colors} from './src/shared/design-system/tokens/colors';

const navigationTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.background.primary,
    border: colors.border.subtle,
    card: colors.background.elevated,
    primary: colors.accent.cyan,
    text: colors.text.primary,
  },
};

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <NavigationContainer theme={navigationTheme}>
        <MainTabNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
