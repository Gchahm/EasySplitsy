import { User } from '@firebase/auth';

export interface IUser extends User {}

export interface ISignInWithGoogleResult {
  token: string | undefined;
  user: IUser;
}

export interface IAuthApi {
  currentUser: () => Promise<IUser | null>;
  signInWithGoogle: (rememberMe: boolean) => Promise<ISignInWithGoogleResult>;
  signOut: () => Promise<void>;
}

export interface IApi {
  auth: IAuthApi;
}
