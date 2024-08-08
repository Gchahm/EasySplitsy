import {IBillItem} from "../../interfaces/IBillItem";
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

interface IMoveItemToFromParticipantPayload {
    itemId: string;
    participantId: string;
    quantity: number;
}

interface ISetBillPayload {
    bill: IBillItem[];
}

interface IAddParticipantsPayload {
    participants: IParticipant[];
}

export type BillStoreAction = IBillStoreAction<ActionType.moveItemToParticipant, IMoveItemToFromParticipantPayload> |
    IBillStoreAction<ActionType.moveItemToBill, IMoveItemToFromParticipantPayload> |
    IBillStoreAction<ActionType.setBill, ISetBillPayload> |
    IBillStoreAction<ActionType.addParticipants, IAddParticipantsPayload>