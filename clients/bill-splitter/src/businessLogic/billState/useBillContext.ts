import * as React from "react";
import { reducer } from "./reducer";
import { devInitialState, initialState } from "./store";
import { ActionType } from "./actions";
import { IItem } from "../../interfaces/IItem";
import { IParticipant } from "../../interfaces/IParticipant";
import { isDevMode } from "../utils";
import { IBillContext } from "./IBillContext";
import { IBillItem } from "../../interfaces/IBillItem";

export const useBillContext = (): IBillContext => {
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
