import { IItem } from "../../interfaces/IItem";
import { IParticipant } from "../../interfaces/IParticipant";
import { IBillItem } from "../../interfaces/IBillItem";

export interface IBillContext {
  isBillLoaded?: boolean;
  items: IItem[];
  bill: Record<string, number>;
  participants: IParticipant[];
  selectedParticipant: IParticipant | undefined;
  moveItemToParticipant: (itemId: string, quantity?: number) => void;
  moveItemToBill: (itemId: string, quantity?: number) => void;
  setBill: (bill: IBillItem[]) => void;
  addParticipants: (participants: IParticipant[]) => void;
  setSelectedParticipantId: (participantId: string) => void;
}
