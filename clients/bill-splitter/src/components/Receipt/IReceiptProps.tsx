import {IItem} from "../../interfaces/IItem";
import {IParticipant} from "../../interfaces/IParticipant";

export interface IReceiptProps {
    items: IItem[];
    billItems: Record<string, number>;
    selectedParticipant?: IParticipant;
    onItemClick: (itemId: string) => void;
    onParticipantItemClick: (itemId: string) => void;
}