import { IUser } from '@/logic/authentication/auth.models';

export interface ISignInWithGoogleResult {
  token: string | undefined;
  user: IUser;
}

export interface IAuthService {
  currentUser: () => Promise<IUser | null>;
  signInWithGoogle: (rememberMe: boolean) => Promise<ISignInWithGoogleResult>;
  signOut: () => Promise<void>;
}
