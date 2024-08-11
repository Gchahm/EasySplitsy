import * as React from "react";
import {reducer} from "./reducer";
import {initialState} from "./store";
import {ActionType} from "./actions";
import {IBillItem} from "../../interfaces/IBillItem";
import {IParticipant} from "../../interfaces/IParticipant";

export interface IBillContext {
    isBillLoaded?: boolean,
    billItems: IBillItem[],
    participants: IParticipant[],
    selectedParticipant: IParticipant | undefined,
    moveItemToParticipant: (itemId: string, quantity?: number) => void,
    moveItemToBill: (itemId: string, quantity?: number) => void,
    setBill: (bill: IBillItem[]) => void,
    addParticipants: (participants: IParticipant[]) => void,
    setSelectedParticipantId: (participantId: string) => void
}

export const useBillContext = () => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    const [selectedParticipantId, setSelectedParticipantId] = React.useState<string | undefined>()
    const [isBillLoaded, setIsBillLoaded] = React.useState<boolean>(false);

    const moveItemToParticipant = (itemId: string, quantity: number = 1) => {
        if (!selectedParticipantId) {
            return;
        }
        dispatch({type: ActionType.moveItemToParticipant, payload: {itemId, participantId: selectedParticipantId, quantity}})
    }

    const moveItemToBill = (itemId: string, quantity: number = 1) => {
        if (!selectedParticipantId) {
            return;
        }
        dispatch({type: ActionType.moveItemToBill, payload: {itemId, participantId: selectedParticipantId, quantity}})
    }

    const setBill = (bill: IBillItem[]) => {
        setIsBillLoaded(true);
        dispatch({type: ActionType.setBill, payload: {bill}})
    }

    const addParticipants = (participants: IParticipant[]) => {
        dispatch({type: ActionType.addParticipants, payload: {participants}})
    }

    const billItems: IBillItem[] = Object.values(store.bill);
    const participants: IParticipant[] = Object.values(store.participants);
    const selectedParticipant = selectedParticipantId ? {
        ...store.participants[selectedParticipantId],
        items: Object.values(store.participantsItems[selectedParticipantId] || {})
    } : undefined;

    return {
        isBillLoaded,
        billItems,
        participants,
        selectedParticipant,
        moveItemToParticipant,
        moveItemToBill,
        setBill,
        addParticipants,
        setSelectedParticipantId
    }
}
export const BillContext = React.createContext<IBillContext>({
    isBillLoaded: false,
    billItems: [],
    participants: [],
    selectedParticipant: undefined,
    moveItemToParticipant: () => {},
    moveItemToBill: () => {},
    setBill: () => {},
    addParticipants: () => {},
    setSelectedParticipantId: () => {}
});

