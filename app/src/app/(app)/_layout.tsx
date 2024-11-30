import { Text } from 'react-native';
import { router, Stack } from 'expo-router';
import { useSession } from '@/logic';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import React from 'react';

export default function App() {
  const { user, isLoading } = useSession();

  React.useEffect(() => {
    if (!user && !isLoading) {
      router.navigate('/sign-in');
    }
  }, [user]);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f4511e',
          },
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="participants/[id]"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
    </GestureHandlerRootView>
  );
}
