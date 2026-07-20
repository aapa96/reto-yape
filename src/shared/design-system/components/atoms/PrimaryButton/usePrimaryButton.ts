import {useCallback} from 'react';

interface UsePrimaryButtonParams {
  disabled?: boolean;
  loading?: boolean;
  onPress: () => void;
}

export function usePrimaryButton({
  disabled = false,
  loading = false,
  onPress,
}: UsePrimaryButtonParams) {
  const isDisabled = disabled || loading;

  const handlePress = useCallback(() => {
    if (!isDisabled) {
      onPress();
    }
  }, [isDisabled, onPress]);

  return {handlePress, isDisabled};
}
