import { Stack } from 'expo-router';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { Text } from '@rneui/themed';

export default function ReceiptsLayout() {
  return (
    <ThemedSafeAreaView>
      <Text>Add Receipt</Text>
      <Stack
        screenOptions={{
          headerStyle: {},
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="upload" options={{ headerShown: false }} />
      </Stack>
    </ThemedSafeAreaView>
  );
}
