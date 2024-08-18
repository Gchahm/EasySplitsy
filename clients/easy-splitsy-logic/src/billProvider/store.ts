import { IItem, IParticipant } from "easy-splitsy-interfaces";

export type Bill = Record<string, IItem>;

export interface IBillStore {
  colors: [];
  items: Record<string, IItem>;
  bill: Record<string, number>;
  participants: Record<string, IParticipant>;
  isBillLoaded?: boolean;
  selectedParticipantId?: string;
}

export const initialState: IBillStore = {
  colors: [],
  bill: {},
  items: {},
  participants: {},
};

export const devInitialState: IBillStore = {
  colors: [],
  isBillLoaded: true,
  items: {
    "1": {
      id: "1",
      name: "Item 1",
      price: 10.0,
    },
    "2": {
      id: "2",
      name: "Item 2",
      price: 20.0,
    },
    "3": {
      id: "3",
      name: "Item 3",
      price: 30.0,
    },
    "4": {
      id: "4",
      name: "Item 4",
      price: 40.0,
    },
    "5": {
      id: "5",
      name: "Item 5",
      price: 50.0,
    },
    "6": {
      id: "6",
      name: "Item 6",
      price: 60.0,
    },
    "7": {
      id: "7",
      name: "Item 7",
      price: 70.0,
    },
    "8": {
      id: "8",
      name: "Item 8",
      price: 80.0,
    },
    "9": {
      id: "9",
      name: "Item 9",
      price: 90.0,
    },
    "10": {
      id: "10",
      name: "Item 10",
      price: 100.0,
    },
  },
  bill: {
    "1": 3,
    "2": 2,
    "3": 1,
    "4": 2,
    "5": 3,
    "6": 1,
    "7": 2,
    "8": 3,
    "9": 1,
    "10": 20,
  },
  participants: {},
};
