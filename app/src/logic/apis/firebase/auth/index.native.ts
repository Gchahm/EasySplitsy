import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseApp } from '@firebase/app';
import { initializeAuth, getReactNativePersistence } from '@firebase/auth';

export default function(fireBaseApp: FirebaseApp) {
  return initializeAuth(fireBaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}