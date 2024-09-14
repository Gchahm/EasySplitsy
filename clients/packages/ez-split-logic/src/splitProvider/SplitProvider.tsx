import * as React from "react";
import { ISplitContext } from "./ISplitContext";
import { splitReducer } from "./splitReducer";
import { isDevMode } from "../utils";
import { devInitialState, initialState } from "./splitStore";
import { ActionType } from "./splitActions";
import {
  IReceiptItem,
  IItem,
  IParticipant,
  IPerson,
} from "ez-split-interfaces";
import { SplitContext } from "./SplitContext";

export const SplitProvider: React.FC<{
  children: React.ReactNode | ((state: ISplitContext) => React.ReactNode);
}> = ({ children }) => {
  const [store, dispatch] = React.useReducer(
    splitReducer,
    isDevMode ? devInitialState : initialState,
  );
  const {
    isReceiptLoaded: isBillLoaded,
    remainingCount: bill,
    selectedParticipantId,
  } = store;

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

  const setBill = (bill: IReceiptItem[]) => {
    dispatch({ type: ActionType.setReceipt, payload: { receipt: bill } });
  };

  const addPeople = (people: IPerson[]) => {
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

  const removeParticipants = (ids: string[]) => {
    dispatch({
      type: ActionType.removeParticipants,
      payload: { ids },
    });
  };

  const items: IItem[] = Object.values(store.items);
  const participants: IParticipant[] = Object.values(store.participants);
  const selectedParticipant = selectedParticipantId
    ? store.participants[selectedParticipantId]
    : undefined;

  const state: ISplitContext = {
    isReceiptLoaded: isBillLoaded,
    items,
    remainingCount: bill,
    participants,
    selectedParticipant,
    moveItemToParticipant,
    moveItemToBill,
    setBill,
    addPeople,
    setSelectedParticipantId,
    removeParticipants,
  };

  return (
    <SplitContext.Provider value={state}>
      {typeof children === "function" ? children(state) : children}
    </SplitContext.Provider>
  );
};
