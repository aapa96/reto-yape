import {useEffect} from 'react';
import {AccessibilityInfo} from 'react-native';

import {
  isSecureViewAvailable,
  onValidationError,
} from '@aranzatech/react-native-card-secure-view';

export function useSecureViewEvents() {
  useEffect(() => {
    if (!isSecureViewAvailable()) {
      return;
    }

    const validationSubscription = onValidationError(({message}) => {
      AccessibilityInfo.announceForAccessibility(message);
    });

    return () => {
      validationSubscription.remove();
    };
  }, []);
}
