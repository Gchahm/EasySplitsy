import { IDatabaseService } from '@/logic/apis/database';
import React, {
  createContext,
  type PropsWithChildren,
  useContext,
} from 'react';
import { useAuth } from '@/logic/authentication';
import { FirebaseDataBaseProvider } from '@/logic/apis/database';

const DatabaseContext = createContext<IDatabaseService | null>(null);

// This hook can be used to access the user info.
export function useDatabase() {
  const value = useContext(DatabaseContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function DatabaseContextProvider({ children }: PropsWithChildren) {
  const { user } = useAuth();

  const databaseService: IDatabaseService | null = React.useMemo(() => {
    if (!user) {
      return null;
    }
    return new FirebaseDataBaseProvider(user.uid);
  }, [user]);

  return (
    <DatabaseContext.Provider value={databaseService}>
      {children}
    </DatabaseContext.Provider>
  );
}
