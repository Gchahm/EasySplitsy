import { router } from 'expo-router';
import { Text, View } from 'react-native';
import { useSession } from '@/logic/authentication/SessionProvider';
import React from 'react';

export default function SignOut() {
  const { user, signOut, isLoading } = useSession();

  const singOut = async () => {
    await signOut();
    // Navigate after signing in. You may want to tweak this to ensure sign-in is
    // successful before navigating.
    router.navigate('/');
  };

  React.useEffect(() => {
    void singOut();
  }, []);

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    ></View>
  );
}
