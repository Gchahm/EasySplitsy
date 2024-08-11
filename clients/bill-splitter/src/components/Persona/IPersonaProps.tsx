import { IParticipant } from "../../interfaces/IParticipant";

export interface IPersonaProps extends IParticipant {
  isActive?: boolean;
  onClick?: () => void;
}