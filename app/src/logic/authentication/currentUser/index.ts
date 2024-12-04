import { getAuth, User } from '@firebase/auth';

let initialized = false;
export default async function currentUser(): Promise<User | null> {
  const auth = getAuth();
  if (!initialized) {
    await auth.authStateReady();
  }
  return auth.currentUser;
}
