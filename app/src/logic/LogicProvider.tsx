import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '@/logic/authentication';
import { store } from '@/logic/store';
import { ServicesProvider } from './services';
import { DatabaseContextProvider } from '@/logic/apis/DatabaseContextProvider';
import { Provider } from 'react-redux';

export function LogicProvider({ children }: PropsWithChildren) {
  return (
    <ServicesProvider>
      <AuthProvider>
        <DatabaseContextProvider>
          <Provider store={store}>
              {children}
          </Provider>
        </DatabaseContextProvider>
      </AuthProvider>
    </ServicesProvider>
  );
}
