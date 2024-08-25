import {
    IParticipant,
    IPerson,
    IItem,
    IBillItem,
} from "ez-split-interfaces";

export interface IBillContext {
    isBillLoaded?: boolean;
    items: IItem[];
    bill: Record<string, number>;
    participants: IParticipant[];
    selectedParticipant: IParticipant | undefined;
    moveItemToParticipant: (itemId: string, quantity?: number) => void;
    moveItemToBill: (itemId: string, quantity?: number) => void;
    setBill: (bill: IBillItem[]) => void;
    addPeople: (people: IPerson[]) => void;
    setSelectedParticipantId: (participantId: string | undefined) => void;
}