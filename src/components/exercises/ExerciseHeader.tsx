import { View } from 'react-native';

import { IconButton } from '@/components/ui/IconButton';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { useTheme } from '@/theme/ThemeProvider';

export function ExerciseHeader({ progress, onClose }: { progress: number; onClose: () => void }) {
  const theme = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing.md }}>
      <IconButton name="close" onPress={onClose} tone="muted" />
      <View style={{ flex: 1 }}>
        <ProgressBar progress={progress} />
      </View>
    </View>
  );
}
