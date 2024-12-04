import { initializeFirestore } from '@firebase/firestore';
import { FirebaseApp, getApp } from '@firebase/app';

export default function() {
  console.log('Hello from firestoreNativeSetup');
  return initializeFirestore(getApp(), {});
}