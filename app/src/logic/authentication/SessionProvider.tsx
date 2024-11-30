import React, {
  createContext,
  type PropsWithChildren,
  useContext,
} from 'react';
import { AuthApi, IAuthApi, IUser } from '@/logic/apis';

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
  signIn: async () => {},
  signOut: async () => {},
  signInWithGoogle: async () => {},
});

// This hook can be used to access the user info.
export function useSession() {
  const value = useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function SessionProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);

  const authAPi: IAuthApi = React.useMemo(() => new AuthApi(), []);

  const loadUser = async () => {
    const user = await authAPi.currentUser();
    setIsLoading(false);
    setCurrentUser(user);
    console.log('user', user);
  };

  React.useEffect(() => {
    void loadUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn: async () => {},
        signOut: async () => {
          await authAPi.signOut();
          setCurrentUser(null);
        },
        signInWithGoogle: async (rememberMe: boolean) => {
          const result = await authAPi.signInWithGoogle(rememberMe);
          setCurrentUser(result.user);
        },
        user: currentUser,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
