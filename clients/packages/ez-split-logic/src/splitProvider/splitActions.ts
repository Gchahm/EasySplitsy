import { IPerson, IReceiptItem } from "ez-split-interfaces";

export enum ActionType {
  moveItemToParticipant = "MOVE_ITEM_TO_PARTICIPANT",
  moveItemToBill = "MOVE_ITEM_TO_RECEIPT",
  setReceipt = "SET_RECEIPT",
  addParticipants = "ADD_PARTICIPANTS",
  removeParticipants = "REMOVE_PARTICIPANTS",
  setSelectedParticipantId = "SET_PARTICIPANT_ID",
}

interface ISplitStoreAction<T, P> {
  type: T;
  payload: P;
}

interface IMoveItemPayload {
  itemId: string;
  participantId: string;
  quantity: number;
}

interface ISetReceiptPayload {
  receipt: IReceiptItem[];
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

export type SplitStoreAction =
  | ISplitStoreAction<ActionType.moveItemToParticipant, IMoveItemPayload>
  | ISplitStoreAction<ActionType.moveItemToBill, IMoveItemPayload>
  | ISplitStoreAction<ActionType.setReceipt, ISetReceiptPayload>
  | ISplitStoreAction<ActionType.addParticipants, IAddParticipantsPayload>
  | ISplitStoreAction<
      ActionType.setSelectedParticipantId,
      ISetSelectedParticipantId
    >
  | ISplitStoreAction<
      ActionType.removeParticipants,
      IRemoveParticipantsPayload
    >;
