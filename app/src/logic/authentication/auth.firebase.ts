import { Auth, getAuth, GoogleAuthProvider, User } from '@firebase/auth';
import { IAuthService, ISignInWithGoogleResult } from './auth.types';
import signInWithGoogle from './signInWithGoogle';


export class FirebaseAuthService implements IAuthService {
  private isReady = false;
  private readonly _auth: Auth;
  private _googleAuthProvider = new GoogleAuthProvider();

  constructor() {
    this._auth = getAuth();
  }

  public async currentUser(): Promise<User | null> {
    if (!this.isReady) {
      await this._auth.authStateReady();
    }
    return this._auth.currentUser;
  }

  public async signInWithGoogle(): Promise<ISignInWithGoogleResult> {
    return signInWithGoogle(this._googleAuthProvider);
  }

  public signOut(): Promise<void> {
    return this._auth.signOut();
  }
}
