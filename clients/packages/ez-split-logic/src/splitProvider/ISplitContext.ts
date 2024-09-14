import {
  IParticipant,
  IPerson,
  IItem,
  IReceiptItem,
} from "ez-split-interfaces";

export interface ISplitContext {
  isReceiptLoaded?: boolean;
  items: IItem[];
  remainingCount: Record<string, number>;
  participants: IParticipant[];
  selectedParticipant: IParticipant | undefined;
  moveItemToParticipant: (itemId: string, quantity?: number) => void;
  moveItemToBill: (itemId: string, quantity?: number) => void;
  setBill: (bill: IReceiptItem[]) => void;
  addPeople: (people: IPerson[]) => void;
  removeParticipants: (ids: string[]) => void;
  setSelectedParticipantId: (participantId: string | undefined) => void;
}
