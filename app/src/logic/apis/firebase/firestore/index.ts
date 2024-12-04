import { initializeFirestore } from '@firebase/firestore';
import { FirebaseApp } from '@firebase/app';

export default function(firebaseApp: FirebaseApp) {
  return initializeFirestore(firebaseApp, {});
}