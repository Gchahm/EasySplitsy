import { IUser } from '@/logic/authentication/auth.types';
import { getAuth } from '@react-native-firebase/auth';

export default async function currentUser(): Promise<IUser | null> {
  const auth = getAuth();
  return new Promise((resolve) => {
    auth.onAuthStateChanged(resolve);
  });
}
