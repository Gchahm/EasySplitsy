import { FirebaseApp } from '@firebase/app';
import { initializeFirestore } from '@firebase/firestore';

export default function(fireBaseApp: FirebaseApp) {
  console.log('Hello from firestoreSetup');
  return initializeFirestore(fireBaseApp, {
  });
}
