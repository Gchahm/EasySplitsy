import { Contact, IDatabaseService, Receipt } from '@/logic/apis/database';
import React, {
  createContext,
  type PropsWithChildren,
  useContext,
} from 'react';
import { useAuth } from '@/logic/authentication';
import { FirebaseDataBaseProvider } from '@/logic/apis/database';

interface IDatabaseContext {
  database: IDatabaseService | null;
  contacts: Contact[];
  receipts: Receipt[];
}

const DatabaseContext = createContext<IDatabaseContext>({
  database: null,
  contacts: [],
  receipts: [],
});

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
  const [contacts, setContacts] = React.useState<Contact[]>([]);
  const [receipts, setReceipts] = React.useState<Receipt[]>([]);

  const database: IDatabaseService | null = React.useMemo(() => {
    if (!user) {
      return null;
    }
    return new FirebaseDataBaseProvider(user.uid);
  }, [user]);

  React.useEffect(() => {
    if (!database) {
      return;
    }
    console.log('DatabaseContextProvider', database);
    const unsubContacts = database.contacts.subscribe(setContacts);
    const unsubReceipts = database.receipts.subscribe(setReceipts);

    return () => {
      unsubContacts();
      unsubReceipts();
    };
  }, [database]);

  return (
    <DatabaseContext.Provider
      value={{
        database,
        contacts,
        receipts,
      }}
    >
      {children}
    </DatabaseContext.Provider>
  );
}
