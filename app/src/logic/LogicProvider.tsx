import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '@/logic/authentication';
import { store } from '@/logic/store';
import { DatabaseContextProvider } from '@/logic/database/DatabaseContextProvider';
import { Provider } from 'react-redux';

export function LogicProvider({ children }: PropsWithChildren) {
  return (
      <AuthProvider>
        <DatabaseContextProvider>
          <Provider store={store}>
              {children}
          </Provider>
        </DatabaseContextProvider>
      </AuthProvider>
  );
}
