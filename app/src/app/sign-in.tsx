import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useSession } from '@/logic/authentication/SessionProvider';
import React from 'react';

export default function SignIn() {
  const { user, signInWithGoogle, isLoading } = useSession();

  const handleSignClick = async () => {
    // TODO: ask for remember me
    await signInWithGoogle(true);
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.replace('/');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text onPress={handleSignClick}>Sign In</Text>
    </View>
  );
}
