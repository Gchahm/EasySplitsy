import {IBillItem} from "../../interfaces/IBillItem";
import {IParticipant} from "../../interfaces/IParticipant";

export type Bill = Record<string, IBillItem>;

export interface IBillStore {
    bill: Bill;
    participants: Record<string, IParticipant>;

    participantsItems: Record<string, Bill>;
}


export const initialState: IBillStore = {
    bill: {},
    participants: {},
    participantsItems: {}
}