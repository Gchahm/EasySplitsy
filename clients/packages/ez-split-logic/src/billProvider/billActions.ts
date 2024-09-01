import { IPerson, IBillItem } from "ez-split-interfaces";

export enum ActionType {
  moveItemToParticipant = "MOVE_ITEM_TO_PARTICIPANT",
  moveItemToBill = "MOVE_ITEM_TO_BILL",
  setBill = "SET_BILL",
  addParticipants = "ADD_PARTICIPANTS",
  removeParticipants = "REMOVE_PARTICIPANTS",
  setSelectedParticipantId = "SET_PARTICIPANT_ID",
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

interface IRemoveParticipantsPayload {
  ids: string[];
}

interface ISetSelectedParticipantId {
  selectedParticipantId: string | undefined;
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
  | IBillStoreAction<ActionType.removeParticipants, IRemoveParticipantsPayload>;
