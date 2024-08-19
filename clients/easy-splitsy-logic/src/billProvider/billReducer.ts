import { Bill, IBillStore } from "./billStore";
import { ActionType, BillStoreAction } from "./billActions";
import { IParticipant } from "easy-splitsy-interfaces";
import { uuidv4 } from "../utils/generateGuid";

export function billReducer(
  state: IBillStore,
  action: BillStoreAction,
): IBillStore {
  const { participants, bill, items } = state;

  switch (action.type) {
    case ActionType.moveItemToParticipant: {
      const { itemId, quantity, participantId } = action.payload;
      const participant: IParticipant | undefined = participants[participantId];
      if (!participant) return { ...state };
      const itemQuantity: number = bill[itemId] || 0;
      const moveQuantity = quantity > itemQuantity ? itemQuantity : quantity;
      return {
        ...state,
        bill: {
          ...bill,
          [itemId]: (bill[itemId] || 0) - moveQuantity,
        },
        participants: {
          ...participants,
          [participantId]: {
            ...participant,
            total: participant.total + moveQuantity * items[itemId].price,
            items: {
              ...participant.items,
              [itemId]: (participant.items[itemId] || 0) + moveQuantity,
            },
          },
        },
      };
    }

    case ActionType.moveItemToBill: {
      const { participantId, itemId, quantity } = action.payload;
      const participant: IParticipant | undefined = participants[participantId];
      if (!participant) return { ...state };
      const itemQuantity: number = participant.items[itemId] || 0;
      const moveQuantity = quantity > itemQuantity ? itemQuantity : quantity;
      return {
        ...state,
        bill: {
          ...bill,
          [itemId]: (bill[itemId] || 0) + moveQuantity,
        },
        participants: {
          ...participants,
          [participantId]: {
            ...participant,
            total: participant.total - moveQuantity * items[itemId].price,
            items: {
              ...participant?.items,
              [itemId]: itemQuantity - moveQuantity,
            },
          },
        },
      };
    }

    case ActionType.setBill: {
      const items: Bill = {};
      const newBill: Record<string, number> = {};
      action.payload.bill.forEach((item) => {
        items[item.id] = item;
        newBill[item.id] = item.quantity;
      });
      return {
        ...state,
        items: items,
        bill: newBill,
        isBillLoaded: true,
      };
    }

    case ActionType.addParticipants: {
      let id: string | undefined;
      const newParticipants: Record<string, IParticipant> = {};
      action.payload.people.forEach((person) => {
        id = uuidv4();
        newParticipants[id] = {
          ...person,
          id,
          total: 0,
          items: {},
        };
      });
      return {
        ...state,
        selectedParticipantId: id,
        participants: { ...participants, ...newParticipants },
      };
    }

    case ActionType.setSelectedParticipantId: {
      const { selectedParticipantId } = action.payload;
      return {
        ...state,
        selectedParticipantId,
      };
    }

    default:
      return state;
  }
}
