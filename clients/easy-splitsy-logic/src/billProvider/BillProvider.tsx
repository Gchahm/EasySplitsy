import * as React from "react";
import { IBillContext } from "./IBillContext";
import { reducer } from "./reducer";
import { isDevMode } from "../utils";
import { devInitialState, initialState } from "./store";
import { ActionType } from "./actions";
import {
  IBillItem,
  IItem,
  IParticipant,
  IPerson,
} from "easy-splitsy-interfaces";
import { BillContext } from "./BillContext";

export const BillProvider: React.FC<{
  children: React.ReactNode | ((state: IBillContext) => React.ReactNode);
}> = ({ children }) => {
  const [store, dispatch] = React.useReducer(
    reducer,
    isDevMode ? devInitialState : initialState,
  );
  const { isBillLoaded, bill, selectedParticipantId } = store;

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

  const addPerson = (people: IPerson[]) => {
    dispatch({
      type: ActionType.addParticipants,
      payload: {
        people,
      },
    });
  };

  const setSelectedParticipantId = (
    selectedParticipantId: string | undefined,
  ) => {
    dispatch({
      type: ActionType.setSelectedParticipantId,
      payload: { selectedParticipantId },
    });
  };

  const items: IItem[] = Object.values(store.items);
  const participants: IParticipant[] = Object.values(store.participants);
  const selectedParticipant = selectedParticipantId
    ? store.participants[selectedParticipantId]
    : undefined;

  const state: IBillContext = {
    isBillLoaded,
    items,
    bill,
    participants,
    selectedParticipant,
    moveItemToParticipant,
    moveItemToBill,
    setBill,
    addPerson,
    setSelectedParticipantId,
  };

  return (
    <BillContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </BillContext.Provider>
  );
};
