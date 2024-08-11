import {IItem} from "../../interfaces/IItem";
import {IParticipant} from "../../interfaces/IParticipant";

export enum ActionType {

    moveItemToParticipant = 'MOVE_ITEM_TO_PARTICIPANT',
    moveItemToBill = 'MOVE_ITEM_TO_BILL',
    setBill = 'SET_BILL',
    addParticipants = 'ADD_PARTICIPANTS',
}

interface IBillStoreAction<T, P> {
    type: T,
    payload: P
}

interface IMoveItemPayload {
    itemId: string;
    participantId: string;
    quantity: number;
}

interface ISetBillPayload {
    bill: IItem[];
}

interface IAddParticipantsPayload {
    participants: IParticipant[];
}

export type BillStoreAction = IBillStoreAction<ActionType.moveItemToParticipant, IMoveItemPayload> |
    IBillStoreAction<ActionType.moveItemToBill, IMoveItemPayload> |
    IBillStoreAction<ActionType.setBill, ISetBillPayload> |
    IBillStoreAction<ActionType.addParticipants, IAddParticipantsPayload>;