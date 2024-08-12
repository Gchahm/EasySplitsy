import { IParticipant } from "../../interfaces/IParticipant";

export interface IParticipantsProps {
  selectedParticipant: IParticipant | undefined;
  participants: IParticipant[];
  onParticipantChange: (id: string) => void;
}
