import * as React from "react";
import { IBillContext } from "./IBillContext";
import { reducer } from "./reducer.ts";
import { isDevMode } from "../utils";
import { devInitialState, initialState } from "./store.ts";
import { ActionType } from "./actions.ts";
import { IBillItem } from "../../interfaces/IBillItem.ts";
import { IParticipant } from "../../interfaces/IParticipant.ts";
import { IItem } from "../../interfaces/IItem.ts";

export const BillContext = React.createContext<IBillContext>({
  isBillLoaded: false,
  bill: {},
  items: [],
  participants: [],
  selectedParticipant: undefined,
  moveItemToParticipant: () => {},
  moveItemToBill: () => {},
  setBill: () => {},
  addParticipants: () => {},
  setSelectedParticipantId: () => {},
});

export const BillContextProvider: React.FC = ({ children }) => {
  const state = useBillContext();
  return (
    <BillContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </BillContext.Provider>
  );
};

const useBillContext = (): IBillContext => {
  const [store, dispatch] = React.useReducer(
    reducer,
    isDevMode ? devInitialState : initialState,
  );
  const [selectedParticipantId, setSelectedParticipantId] = React.useState<
    string | undefined
  >();

  const moveItemToParticipant = (itemId: string, quantity: number = 1) => {
    if (!selectedParticipantId) {
      return;
    }
    dispatch({
      type: ActionType.moveItemToParticipant,
      payload: { itemId, participantId: selectedParticipantId, quantity },
    });
  };

  const moveItemToBill = (itemId: string, quantity: number = 1) => {
    if (!selectedParticipantId) {
      return;
    }
    dispatch({
      type: ActionType.moveItemToBill,
      payload: { itemId, participantId: selectedParticipantId, quantity },
    });
  };

  const setBill = (bill: IBillItem[]) => {
    dispatch({ type: ActionType.setBill, payload: { bill } });
  };

  const addParticipants = (participants: IParticipant[]) => {
    dispatch({ type: ActionType.addParticipants, payload: { participants } });
  };

  const items: IItem[] = Object.values(store.items);
  const participants: IParticipant[] = Object.values(store.participants);
  const selectedParticipant = selectedParticipantId
    ? store.participants[selectedParticipantId]
    : undefined;

  const { isBillLoaded, bill } = store;

  return {
    isBillLoaded,
    items,
    bill,
    participants,
    selectedParticipant,
    moveItemToParticipant,
    moveItemToBill,
    setBill,
    addParticipants,
    setSelectedParticipantId,
  };
};
