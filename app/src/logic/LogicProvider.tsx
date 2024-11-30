import React, { PropsWithChildren } from 'react';
import { SessionProvider } from '@/logic/authentication';
import { EzSplitLogicProvider } from '@/logic/store';
import { ServicesProvider } from './services';

export function LogicProvider({ children }: PropsWithChildren) {
  return (
    <ServicesProvider>
      <SessionProvider>
        <EzSplitLogicProvider>{children}</EzSplitLogicProvider>
      </SessionProvider>
    </ServicesProvider>
  );
}
