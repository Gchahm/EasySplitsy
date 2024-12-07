import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect } from 'react';
import 'react-native-reanimated';
import { EzThemeProvider } from '@/theme/EzThemeProvider';
import { polyfillWebCrypto } from 'expo-standard-web-crypto';
import { LogicProvider } from '@/logic';
import initializeFirebase from '../libs/firebase';

polyfillWebCrypto();

// Prevent the splash screen from auto-hiding before asset loading is complete.
void SplashScreen.preventAutoHideAsync();

export default function Root() {
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf')
  });

  useEffect(() => {
    initializeFirebase();
  }, []);

  useEffect(() => {
    if (loaded) {
      void SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <LogicProvider>
      <EzThemeProvider>
        <Slot />
      </EzThemeProvider>
    </LogicProvider>
  );
}
