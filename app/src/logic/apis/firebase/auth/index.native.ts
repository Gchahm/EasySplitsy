import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseApp } from '@react-native-firebase/app';
import { getReactNativePersistence, initializeAuth } from '@react-native-firebase/auth';


export default function(fireBaseApp: FirebaseApp) {
  console.log('Hello from authSetup', getReactNativePersistence);
  return initializeAuth(fireBaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}
