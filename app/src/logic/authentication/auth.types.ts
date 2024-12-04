import { User } from '@firebase/auth';

export interface ISignInWithGoogleResult {
  token: string | undefined;
  user: IUser;
}

export interface IAuthService {
  currentUser: () => Promise<IUser | null>;
  signInWithGoogle: (rememberMe: boolean) => Promise<ISignInWithGoogleResult>;
  signOut: () => Promise<void>;
}

export interface IUser extends User {}
