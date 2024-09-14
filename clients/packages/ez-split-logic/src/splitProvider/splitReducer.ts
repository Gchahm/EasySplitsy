import { OriginalReceipt, ISplitStore } from "./splitStore";
import { ActionType, SplitStoreAction } from "./splitActions";
import { IParticipant } from "ez-split-interfaces";
import { uuidv4 } from "../utils/generateGuid";

export function splitReducer(
  state: ISplitStore,
  action: SplitStoreAction,
): ISplitStore {
  const { participants, remainingCount: bill, items } = state;

  switch (action.type) {
    case ActionType.moveItemToParticipant: {
      const { itemId, quantity, participantId } = action.payload;
      const participant: IParticipant | undefined = participants[participantId];
      if (!participant) return { ...state };
      const itemQuantity: number = bill[itemId] || 0;
      const moveQuantity = quantity > itemQuantity ? itemQuantity : quantity;
      return {
        ...state,
        remainingCount: {
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
        remainingCount: {
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

    case ActionType.setReceipt: {
      const items: OriginalReceipt = {};
      const newBill: Record<string, number> = {};
      action.payload.receipt.forEach((item) => {
        items[item.id] = item;
        newBill[item.id] = item.quantity;
      });
      return {
        ...state,
        items: items,
        remainingCount: newBill,
        isReceiptLoaded: true,
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

    case ActionType.removeParticipants: {
      const { ids } = action.payload;
      const billItems = { ...state.remainingCount };
      const newParticipants = { ...state.participants };
      ids.forEach((id) => {
        const items = participants[id].items;
        Object.keys(items).forEach((key) => {
          billItems[key] = billItems[key] || 0 + items[key];
        });
        delete newParticipants[id];
      });

      return {
        ...state,
        remainingCount: billItems,
        participants: newParticipants,
      };
    }
  }
}