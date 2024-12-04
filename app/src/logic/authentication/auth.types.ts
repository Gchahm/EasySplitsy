export interface ISignInWithGoogleResult {
  user: IUser;
}

export interface IAuthService {
  currentUser: () => Promise<IUser | null>;
  signInWithGoogle: (rememberMe: boolean) => Promise<ISignInWithGoogleResult>;
  signOut: () => Promise<void>;
}

export interface IUser {
  uid: string;
  email: string | null;
}
