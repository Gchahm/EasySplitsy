import { IAuthService, ISignInWithGoogleResult, IUser } from './auth.types';
import signInWithGoogle from './signInWithGoogle';
import currentUser from './currentUser';


export class FirebaseAuthService implements IAuthService {
  public async currentUser(): Promise<IUser | null> {
    return currentUser();
  }

  public async signInWithGoogle(): Promise<ISignInWithGoogleResult> {
    return signInWithGoogle();
  }

  public signOut(): Promise<void> {
    throw new Error('Method not implemented.');
    // return this._auth.signOut();
  }
}
