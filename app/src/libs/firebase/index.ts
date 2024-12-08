import { EnvironmentVariables } from '@/logic/utils/EnvironmentVariables';
import firebase, { ReactNativeFirebase } from '@react-native-firebase/app';
import { initializeFirestore } from '@firebase/firestore';
import { getApp } from '@firebase/app';

const firebaseConfig: ReactNativeFirebase.FirebaseAppOptions = {
  apiKey: EnvironmentVariables.fireBaseApiKey,
  authDomain: 'ez-split-434212.firebaseapp.com',
  projectId: 'ez-split-434212',
  storageBucket: 'ez-split-434212.firebasestorage.app',
  messagingSenderId: '398815670678',
  appId: '1:398815670678:web:009e2b5c1cd12f84156db7',
  measurementId: 'G-TTMM6WGBNM',
  databaseURL: 'https://ez-split-434212-default-rtdb.firebaseio.com'
};

let initialized = false;

export default async function initializeFirebase() {
  if (initialized) {
    return;
  }
  await firebase.initializeApp(firebaseConfig);
  initializeFirestore(getApp(), {});
}
