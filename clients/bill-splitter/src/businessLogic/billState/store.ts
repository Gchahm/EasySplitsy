import {IBillItem} from "../../interfaces/IBillItem";
import {IParticipant} from "../../interfaces/IParticipant";

export type Bill = Record<string, IBillItem>;

export interface IBillStore {
    isBillLoaded?: boolean;
    bill: Bill;
    participants: Record<string, IParticipant>;
    participantsItems: Record<string, Bill>;
}


export const initialState: IBillStore = {
    bill: {},
    participants: {},
    participantsItems: {}
}

export const devInitialState: IBillStore = {
    isBillLoaded: true,
    bill: {
        "1": {
            id: "1",
            name: "Item 1",
            price: 10,
            quantity: 1
        },
        "2": {
            id: "2",
            name: "Item 2",
            price: 20,
            quantity: 2
        }
    },
    participants: {},
    participantsItems: {}
}