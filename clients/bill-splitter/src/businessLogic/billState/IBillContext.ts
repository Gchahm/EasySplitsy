import {IBillItem} from "../../interfaces/IBillItem";
import {IParticipant} from "../../interfaces/IParticipant";

export interface IBillContext {
    isBillLoaded?: boolean,
    billItems: IBillItem[],
    participants: IParticipant[],
    selectedParticipant: IParticipant | undefined,
    moveItemToParticipant: (itemId: string, quantity?: number) => void,
    moveItemToBill: (itemId: string, quantity?: number) => void,
    setBill: (bill: IBillItem[]) => void,
    addParticipants: (participants: IParticipant[]) => void,
    setSelectedParticipantId: (participantId: string) => void
}
