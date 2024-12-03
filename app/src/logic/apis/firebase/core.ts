import firebase from 'firebase/compat';
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { EnvironmentVariables } from '@/logic/utils/EnvironmentVariables';
import { getAnalytics } from 'firebase/analytics';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import authSetup from './authSetup';

const firebaseConfig: FirebaseOptions = {
  apiKey: EnvironmentVariables.fireBaseApiKey,
  authDomain: 'ez-split-434212.firebaseapp.com',
  projectId: 'ez-split-434212',
  storageBucket: 'ez-split-434212.firebasestorage.app',
  messagingSenderId: '398815670678',
  appId: '1:398815670678:web:009e2b5c1cd12f84156db7',
  measurementId: 'G-TTMM6WGBNM'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(firebaseApp);
authSetup(firebaseApp);