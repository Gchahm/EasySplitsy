import {Bill, IBillStore} from "./store";
import {ActionType, BillStoreAction} from "./actions";
import {IBillItem} from "../../interfaces/IBillItem";
import {IParticipant} from "../../interfaces/IParticipant";


export function reducer(state: IBillStore, action: BillStoreAction): IBillStore {
    const {bill, participants, participantsItems} = state;

    switch (action.type) {
        case ActionType.moveItemToParticipant: {
            const {itemId, quantity, participantId} = action.payload;
            const participant: IParticipant | undefined = participants[participantId];
            const participantItems: Bill = participantsItems[participantId] || {};
            const item: IBillItem | undefined = bill[itemId];
            if (!item || !participant) {
                return {...state};
            }

            const moveQuantity = quantity > item.quantity ? item.quantity : quantity;
            const newBillItem = {...item, quantity: item.quantity - moveQuantity};
            const newBill = {...bill, [itemId]: newBillItem};
            if (newBillItem.quantity === 0) {
                delete newBill[itemId];
            }
            const newParticipantItem: IBillItem = participantItems[itemId] || {...item, quantity: 0};

            return {
                ...state,
                bill: newBill,
                participantsItems: {
                    ...state.participantsItems, [action.payload.participantId]: {
                        ...participantItems,
                        [action.payload.itemId]: {
                            ...newParticipantItem,
                            quantity: newParticipantItem.quantity + moveQuantity
                        }
                    }
                }
            }
        }

        case ActionType.moveItemToBill: {
            const {participantId, itemId, quantity} = action.payload;
            const participant: IParticipant | undefined = participants[participantId];
            const participantItems: Bill = participantsItems[participantId] || {};
            const item: IBillItem | undefined = participantItems[itemId];
            if (!item || !participant) {
                return state;
            }
            const moveQuantity = quantity > item.quantity ? item.quantity : quantity;
            const newParticipantItem = {...item, quantity: item.quantity - moveQuantity};
            const newParticipantItems = {...participantItems, [action.payload.itemId]: newParticipantItem};
            if (newParticipantItem.quantity === 0) {
                delete newParticipantItems[itemId];
            }
            const newBillItem: IBillItem = bill[itemId] || {...item, quantity: 0};
            return {
                ...state,
                bill: {...bill, [itemId]: {...newBillItem, quantity: newBillItem.quantity + moveQuantity}},
                participantsItems: {
                    ...state.participantsItems, [participantId]: {
                        ...newParticipantItems
                    }
                }
            }
        }

        case ActionType.setBill: {
            const newBill: Bill = {};
            action.payload.bill.forEach(item => newBill[item.id] = item);
            return {...state, bill: newBill, isBillLoaded: true};
        }

        case ActionType.addParticipants: {
            const newParticipants: Record<string, IParticipant> = {};
            action.payload.participants.forEach(participant => newParticipants[participant.id] = participant);
            return {...state, participants: {...participants, ...newParticipants}};
        }

        default:
            return state;
    }
}