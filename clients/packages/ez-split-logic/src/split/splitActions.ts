import { IPerson, IReceiptItem } from "ez-split-interfaces";

export interface IMoveItemPayload {
  itemId: string;
  participantId: string;
  quantity: number;
}

export interface ISetReceiptPayload {
  receipt: IReceiptItem[];
}

export interface IAddParticipantsPayload {
  people: IPerson[];
}

export interface IRemoveParticipantsPayload {
  ids: string[];
}

export interface ISetSelectedParticipantId {
  selectedParticipantId: string | undefined;
}
