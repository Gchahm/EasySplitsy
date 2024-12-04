import { Auth, getAuth, GoogleAuthProvider, signInWithPopup, User } from '@firebase/auth';
import { IAuthService, ISignInWithGoogleResult } from './auth.types';


const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.addScope(
  'https://www.googleapis.com/auth/contacts.readonly'
);

export class FirebaseAuthService implements IAuthService {
  private isReady = false;
  private readonly _auth: Auth;

  constructor() {
    this._auth = getAuth();
  }

  public async currentUser(): Promise<User | null> {
    if (!this.isReady) {
      await this._auth.authStateReady();
    }
    return this._auth.currentUser;
  }

  public async signInWithGoogle(
    rememberMe: boolean
  ): Promise<ISignInWithGoogleResult> {
    try {
      // if (rememberMe) {
      //   await this._auth.setPersistence(browserLocalPersistence);
      // } else {
      //   await this._auth.setPersistence(browserSessionPersistence);
      // }
      const result = await signInWithPopup(this._auth, googleAuthProvider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;
      // The signed-in user info.
      const user = result.user;

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
        `Error: ${errorCode} ${errorMessage} ${email} ${credential}`
      );
      // ...
    }
  }

  public signOut(): Promise<void> {
    return this._auth.signOut();
  }
}
