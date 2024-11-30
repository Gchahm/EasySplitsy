import {
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from '@firebase/auth';
import { firebaseApp } from '@/logic/apis/firebase/core';
import {
  IAuthApi,
  ISignInWithGoogleResult,
} from '@/logic/apis/firebase/auth.types';

const auth = getAuth(firebaseApp);

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope(
  'https://www.googleapis.com/auth/contacts.readonly',
);

export class AuthApi implements IAuthApi {
  private isReady = false;

  public async currentUser(): Promise<User | null> {
    if (!this.isReady) {
      await auth.authStateReady();
    }
    return auth.currentUser;
  }

  public async signInWithGoogle(
    rememberMe: boolean,
  ): Promise<ISignInWithGoogleResult> {
    try {
      if (rememberMe) {
        console.log('rememberMe', rememberMe);
        await auth.setPersistence(browserLocalPersistence);
      } else {
        await auth.setPersistence(browserSessionPersistence);
      }
      const result = await signInWithPopup(auth, googleAuthProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      console.log('token', token);
      // The signed-in user info.
      const user = result.user;
      console.log('user', user);

      return { token, user };
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    } catch (error: any) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      throw new Error(
        `Error: ${errorCode} ${errorMessage} ${email} ${credential}`,
      );
      // ...
    }
  }

  public signOut(): Promise<void> {
    return auth.signOut();
  }
}
