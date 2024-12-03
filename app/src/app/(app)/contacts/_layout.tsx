import { Slot, useNavigation } from 'expo-router';
import React, { useEffect } from 'react';

export default function Layout() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return <Slot />;
}
