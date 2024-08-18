import { Bill, IBillStore } from "./store";
import { ActionType, BillStoreAction } from "./actions";
import { IParticipant } from "easy-splitsy-interfaces";

// import {
//   amber,
//   blue,
//   blueGrey,
//   brown,
//   cyan,
//   deepOrange,
//   deepPurple,
//   grey,
//   indigo,
//   orange,
//   pink,
//   purple,
//   red,
// } from "@mui/material/colors";

// const colorNumber = 500;
//
// const colors = [
//   red[colorNumber],
//   pink[colorNumber],
//   purple[colorNumber],
//   deepPurple[colorNumber],
//   indigo[colorNumber],
//   blue[colorNumber],
//   blueGrey[colorNumber],
//   grey[colorNumber],
//   amber[colorNumber],
//   cyan[colorNumber],
//   brown[colorNumber],
//   deepOrange[colorNumber],
//   orange[colorNumber],
// ];
let id: number = 0;

export function reducer(
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
      const newParticipants: Record<string, IParticipant> = {};
      const colors = [...state.colors];
      action.payload.people.forEach(
        (person) =>
          (newParticipants[id++] = {
            ...person,
            id: (id++).toString(),
            total: 0,
            items: {},
            color: colors.pop() || "#FFFFFF",
          }),
      );
      return {
        ...state,
        selectedParticipantId: id.toString(),
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
