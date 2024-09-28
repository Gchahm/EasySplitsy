import { Stack } from 'expo-router';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { Text } from '@rneui/themed';

export default function RootLayout() {
  return (
    <ThemedSafeAreaView>
      <Text>New contact</Text>
      <Stack
        screenOptions={{
          headerStyle: {},
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="[name]" options={{ headerShown: false }} />
      </Stack>
    </ThemedSafeAreaView>
  );
}
