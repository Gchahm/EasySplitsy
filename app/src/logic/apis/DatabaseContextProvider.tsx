import { Contact, IDatabaseService, Receipt } from '@/logic/apis/database';
import React, {
  createContext,
  type PropsWithChildren,
  useContext,
} from 'react';
import { useAuth } from '@/logic/authentication';
import { FirebaseDataBaseProvider } from '@/logic/apis/database';

interface IDatabaseContext {
  database: IDatabaseService;
  contacts: Contact[];
  receipts: Receipt[];
}

const DatabaseContext = createContext<IDatabaseContext | null>(null);

// This hook can be used to access the user info.
export function useDatabase(): IDatabaseContext {
  const value = useContext(DatabaseContext);
  if (!value) {
    throw new Error(
      'useSession must be wrapped in a <DatabaseContextProvider />',
    );
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
      value={
        database
          ? {
              database,
              contacts,
              receipts,
            }
          : null
      }
    >
      {children}
    </DatabaseContext.Provider>
  );
}
