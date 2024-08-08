import * as React from "react";
import {reducer} from "./reducer";
import {initialState} from "./store";
import {ActionType} from "./actions";
import {IBillItem} from "../../interfaces/IBillItem";
import {IParticipant} from "../../interfaces/IParticipant";


export const useBillReducer = () => {
    const [store, dispatch] = React.useReducer(reducer, initialState);
    const [selectedParticipantId, setSelectedParticipantId] = React.useState<string | undefined>()

    const moveItemToParticipant = (itemId: string, participantId: string, quantity: number) => {
        dispatch({type: ActionType.moveItemToParticipant, payload: {itemId, participantId, quantity}})
    }

    const moveItemToBill = (itemId: string, participantId: string, quantity: number) => {
        dispatch({type: ActionType.moveItemToBill, payload: {itemId, participantId, quantity}})
    }

    const setBill = (bill: IBillItem[]) => {
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