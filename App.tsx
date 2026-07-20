import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {AuthGate} from './src/app/AuthGate';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" />
      <AuthGate />
    </SafeAreaProvider>
  );
}

export default App;
