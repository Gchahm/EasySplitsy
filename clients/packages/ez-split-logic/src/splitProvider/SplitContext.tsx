import * as React from "react";
import { ISplitContext } from "./ISplitContext";

export const SplitContext = React.createContext<ISplitContext>({
  isReceiptLoaded: false,
  remainingCount: {},
  items: [],
  participants: [],
  selectedParticipant: undefined,
  moveItemToParticipant: () => {},
  moveItemToBill: () => {},
  setBill: () => {},
  addPeople: () => {},
  setSelectedParticipantId: () => {},
  removeParticipants: () => {},
});
