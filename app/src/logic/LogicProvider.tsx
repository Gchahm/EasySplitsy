import React, { PropsWithChildren } from 'react';
import { AuthProvider } from '@/logic/authentication';
import { EzSplitLogicProvider } from '@/logic/store';
import { ServicesProvider } from './services';

export function LogicProvider({ children }: PropsWithChildren) {
  return (
    <ServicesProvider>
      <AuthProvider>
        <EzSplitLogicProvider>{children}</EzSplitLogicProvider>
      </AuthProvider>
    </ServicesProvider>
  );
}
