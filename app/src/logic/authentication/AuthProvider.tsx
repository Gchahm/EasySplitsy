import React, {
  createContext,
  type PropsWithChildren,
  useContext
} from 'react';
import { IAuthService, IUser } from '@/logic/apis';
import { FirebaseAuthService } from './auth.firebase';

interface IAuthContext {
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  signInWithGoogle: (rememberMe: boolean) => Promise<void>;
  user: IUser | null;
  isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  isLoading: false,
  signIn: async () => {
  },
  signOut: async () => {
  },
  signInWithGoogle: async () => {
  }
});

// This hook can be used to access the user info.
export function useAuth() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function AuthProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);

  const authAPi: IAuthService = React.useMemo(
    () => new FirebaseAuthService(),
    []
  );

  const loadUser = async () => {
    const user = await authAPi.currentUser();
    setIsLoading(false);
    setCurrentUser(user);
  };

  React.useEffect(() => {
    void loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {
        },
        signOut: async () => {
          await authAPi.signOut();
          setCurrentUser(null);
        },
        signInWithGoogle: async (rememberMe: boolean) => {
          const result = await authAPi.signInWithGoogle(rememberMe);
          setCurrentUser(result.user);
        },
        user: currentUser,
        isLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
