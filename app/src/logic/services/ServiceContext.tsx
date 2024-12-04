import { createContext, PropsWithChildren, useContext } from 'react';
import { StorageDev } from '@/logic/services/storage/storage.dev';
import { IStorage } from '@/logic/services/storage/storage.type';

interface IServices {
  storage: IStorage;
}

const ServiceContext = createContext<IServices | null>(null);

// This hook can be used to access the user info.
export function useServices() {
  const value = useContext(ServiceContext);
  if (process.env.NODE_ENV !== 'production') {
    if (!value) {
      throw new Error('useSession must be wrapped in a <SessionProvider />');
    }
  }

  return value;
}

export function ServicesProvider({ children }: PropsWithChildren) {
  return (
    <ServiceContext.Provider
      value={{
        storage: new StorageDev()
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
}
