import { getReactNativePersistence, initializeAuth } from '@firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { FirebaseApp } from '@firebase/app';


export default function(fireBaseApp: FirebaseApp) {
  initializeAuth(fireBaseApp, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
}
