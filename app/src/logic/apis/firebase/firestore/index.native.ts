import { FirebaseApp, getApp } from '@firebase/app';
import { initializeFirestore } from '@firebase/firestore';

export default function() {
  return initializeFirestore(getApp(), {});
}
