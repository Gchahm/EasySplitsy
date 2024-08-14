import { IParticipant } from "../../interfaces/IParticipant.ts";

export interface IParticipantReceiptHeaderProps {
  selectedParticipant: IParticipant | undefined;
  participantName: string;
  isLeftButtonDisabled: boolean;
  isRightButtonDisabled: boolean;
  setParticipantName: (name: string) => void;
  onAddParticipant: () => void;
  onLeftClick: () => void;
  onRightClick: () => void;
}
