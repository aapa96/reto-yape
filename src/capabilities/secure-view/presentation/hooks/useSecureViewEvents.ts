import {useEffect} from 'react';
import {AccessibilityInfo} from 'react-native';

import NativeCardSecureView from '../../../../../specs/NativeCardSecureView';

export function useSecureViewEvents() {
  useEffect(() => {
    if (!NativeCardSecureView) {
      return;
    }

    const validationSubscription = NativeCardSecureView.onValidationError(
      ({message}) => {
        AccessibilityInfo.announceForAccessibility(message);
      },
    );

    return () => {
      validationSubscription.remove();
    };
  }, []);
}
