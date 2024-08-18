import { IPerson, IBillItem } from "easy-splitsy-interfaces";

export enum ActionType {
  setColors = "SET_COLORS",
  moveItemToParticipant = "MOVE_ITEM_TO_PARTICIPANT",
  moveItemToBill = "MOVE_ITEM_TO_BILL",
  setBill = "SET_BILL",
  addParticipants = "ADD_PARTICIPANTS",
  setSelectedParticipantId = "",
}

interface IBillStoreAction<T, P> {
  type: T;
  payload: P;
}

interface IMoveItemPayload {
  itemId: string;
  participantId: string;
  quantity: number;
}

interface ISetBillPayload {
  bill: IBillItem[];
}

interface IAddParticipantsPayload {
  people: IPerson[];
}

interface ISetSelectedParticipantId {
  selectedParticipantId: string | undefined;
}

interface ISetColors {
  colors: string[];
}

export type BillStoreAction =
  | IBillStoreAction<ActionType.moveItemToParticipant, IMoveItemPayload>
  | IBillStoreAction<ActionType.moveItemToBill, IMoveItemPayload>
  | IBillStoreAction<ActionType.setBill, ISetBillPayload>
  | IBillStoreAction<ActionType.addParticipants, IAddParticipantsPayload>
  | IBillStoreAction<
      ActionType.setSelectedParticipantId,
      ISetSelectedParticipantId
    >
  | IBillStoreAction<ActionType.setColors, ISetColors>;
