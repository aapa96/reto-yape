import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {DashboardScreen} from '../src/capabilities/cards/presentation/screens/DashboardScreen/DashboardScreen';

const initialMetrics = {
  frame: {height: 852, width: 393, x: 0, y: 0},
  insets: {bottom: 34, left: 0, right: 0, top: 59},
};

test('requests the native secure view for the selected card', async () => {
  const onOpenSecureView = jest.fn().mockResolvedValue(undefined);
  let renderer: ReactTestRenderer.ReactTestRenderer;

  await ReactTestRenderer.act(() => {
    renderer = ReactTestRenderer.create(
      <SafeAreaProvider initialMetrics={initialMetrics}>
        <DashboardScreen onOpenSecureView={onOpenSecureView} />
      </SafeAreaProvider>,
    );
  });

  const button = renderer!.root.findByProps({
    testID: 'view-sensitive-data-card_001',
  });

  await ReactTestRenderer.act(async () => {
    await button.props.onPress();
  });

  expect(onOpenSecureView).toHaveBeenCalledWith('card_001');
});
