import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useAuth } from '@/logic/authentication';
import React from 'react';
import { Button } from '@rneui/themed';

export default function SignIn() {
  const { signInWithGoogle } = useAuth();

  const handleSignClick = async () => {
    // TODO: ask for remember me
    await signInWithGoogle(true);
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.navigate('/');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={handleSignClick}>Sign In</Button>
    </View>
  );
}
