import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '@/logic/authentication';
import { EzSplitLogicProvider } from '@/logic/store';
import { ServicesProvider } from './services';
import { DatabaseContextProvider } from '@/logic/apis/DatabaseContextProvider';

export function LogicProvider({ children }: PropsWithChildren) {
  return (
    <ServicesProvider>
      <AuthProvider>
        <DatabaseContextProvider>
          <EzSplitLogicProvider>{children}</EzSplitLogicProvider>
        </DatabaseContextProvider>
      </AuthProvider>
    </ServicesProvider>
  );
}
