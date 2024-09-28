import * as React from "react";
import { Provider } from "react-redux";

import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

type EzSplitLogicProviderProps = {
  children: React.ReactNode;
  loading: React.ReactNode;
};

export const EzSplitLogicProvider: React.FC<EzSplitLogicProviderProps> = ({
  children,
  loading,
}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={loading} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
