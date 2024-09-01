import { IParticipant } from "ez-split-interfaces";

export interface IParticipantReceiptHeaderProps {
    participantName: string;
    selectedParticipant?: IParticipant;
    isLeftButtonDisabled?: boolean;
    isRightButtonDisabled?: boolean;
    setParticipantName: (name: string) => void;
    onAddParticipant: () => void;
    onLeftClick: () => void;
    onRightClick: () => void;
}
