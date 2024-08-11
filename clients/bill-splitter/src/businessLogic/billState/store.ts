import {IItem} from "../../interfaces/IItem";
import {IParticipant} from "../../interfaces/IParticipant";

export type Bill = Record<string, IItem>;

export interface IBillStore {
    isBillLoaded?: boolean;
    items: Record<string, IItem>;
    bill: Record<string, number>;
    participants: Record<string, IParticipant>;
}


export const initialState: IBillStore = {
    bill: {},
    items: {},
    participants: {}
}

export const devInitialState: IBillStore = {
    isBillLoaded: true,
    items: {
        "1": {
            id: "1",
            name: "Item 1",
            price: 10.00,
        },
        "2": {
            id: "2",
            name: "Item 2",
            price: 20.00,
        }
    },
    bill: {
        "1": 3,
        "2": 2
    },
    participants: {},
}