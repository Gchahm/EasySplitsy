import { Bill, IBillStore } from "./store";
import { ActionType, BillStoreAction } from "./actions";
import { IParticipant } from "../../interfaces/IParticipant";

import {
  red,
  pink,
  purple,
  deepPurple,
  indigo,
  blue,
  blueGrey,
  grey,
  amber,
  cyan,
  brown,
  deepOrange,
  orange,
} from "@mui/material/colors";

const colorNumber = 500;

const colors = [
  red[colorNumber],
  pink[colorNumber],
  purple[colorNumber],
  deepPurple[colorNumber],
  indigo[colorNumber],
  blue[colorNumber],
  blueGrey[colorNumber],
  grey[colorNumber],
  amber[colorNumber],
  cyan[colorNumber],
  brown[colorNumber],
  deepOrange[colorNumber],
  orange[colorNumber],
];

export function reducer(
  state: IBillStore,
  action: BillStoreAction,
): IBillStore {
  const { participants, bill, items } = state;

  switch (action.type) {
    case ActionType.moveItemToParticipant: {
      const { itemId, quantity, participantId } = action.payload;
      const participant: IParticipant | undefined = participants[participantId];
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
              ...participant.items,
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
      const newParticipants: Record<string, IParticipant> = {};
      action.payload.participants.forEach(
        (participant) =>
          (newParticipants[participant.id] = {
            ...participant,
            color: colors.pop() || red[colorNumber],
          }),
      );
      console.log(newParticipants);
      return {
        ...state,
        participants: { ...participants, ...newParticipants },
      };
    }

    default:
      return state;
  }
}
