import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '@/logic/authentication';
import { persistor, store } from '@/logic/store';
import { ServicesProvider } from './services';
import { DatabaseContextProvider } from '@/logic/apis/DatabaseContextProvider';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export function LogicProvider({ children }: PropsWithChildren) {
  return (
    <ServicesProvider>
      <AuthProvider>
        <DatabaseContextProvider>
          <Provider store={store}>
            <PersistGate persistor={persistor}>{children}</PersistGate>
          </Provider>
        </DatabaseContextProvider>
      </AuthProvider>
    </ServicesProvider>
  );
}
