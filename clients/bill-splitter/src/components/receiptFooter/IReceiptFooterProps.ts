import { IItem } from "../../interfaces/IItem";
import { IParticipant } from "../../interfaces/IParticipant";

export interface IReceiptFooterProps {
  billItems: Record<string, number>;
  selectedItem?: IItem;
  selectedParticipant?: IParticipant;
  onMoveToParticipantClick: () => void;
  onMoveToBillClick: () => void;
}
