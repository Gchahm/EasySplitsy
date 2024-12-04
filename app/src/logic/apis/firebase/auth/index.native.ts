import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getApp } from '@firebase/app';
import { getReactNativePersistence, initializeAuth } from '@firebase/auth';

export default function() {
  return initializeAuth(getApp(), {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}