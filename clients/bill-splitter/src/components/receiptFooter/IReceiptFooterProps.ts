import { IItem, IParticipant } from "easy-splitsy-interfaces";

export interface IReceiptFooterProps {
  billItems: Record<string, number>;
  selectedItem?: IItem;
  selectedParticipant?: IParticipant;
  onMoveToParticipantClick: () => void;
  onMoveToBillClick: () => void;
}
