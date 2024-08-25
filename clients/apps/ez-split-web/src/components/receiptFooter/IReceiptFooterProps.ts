import { IItem, IParticipant } from "ez-split-interfaces";

export interface IReceiptFooterProps {
    billItems: Record<string, number>;
    selectedItem?: IItem;
    selectedParticipant?: IParticipant;
    onMoveToParticipantClick: () => void;
    onMoveToBillClick: () => void;
}
