import { IReceiptItem, IParticipant } from "ez-split-interfaces";

export type OriginalReceipt = Record<string, IReceiptItem>;

export interface ISplitState {
    items: OriginalReceipt;
    remainingCount: Record<string, number>;
    participants: Record<string, IParticipant>;
    isReceiptLoaded?: boolean;
    isUploadingReceipt?: boolean;
    selectedParticipantId?: string;
}

export const initialState: ISplitState = {
    remainingCount: {},
    items: {},
    participants: {},
};

export const devInitialState: ISplitState = {
    isReceiptLoaded: true,
    items: {
        "1": {
            id: "1",
            name: "pao",
            price: 10.0,
            quantity: 1,
        },
        "2": {
            id: "2",
            name: "americano",
            price: 20.0,
            quantity: 2,
        },
        "3": {
            id: "3",
            name: "sanduiche",
            price: 30.0,
            quantity: 4,
        },
        "4": {
            id: "4",
            name: "suco de laranja",
            price: 40.0,
            quantity: 6,
        },
        "5": {
            id: "5",
            name: "pao de queijo",
            price: 50.0,
            quantity: 1,
        },
    },
    remainingCount: {
        "1": 1,
        "2": 2,
        "3": 4,
        "4": 6,
        "5": 1,
    },
    participants: {},
};
