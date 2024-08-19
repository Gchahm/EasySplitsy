import * as React from "react";
import { IBillContext } from "./IBillContext";

export const BillContext = React.createContext<IBillContext>({
  isBillLoaded: false,
  bill: {},
  items: [],
  participants: [],
  selectedParticipant: undefined,
  moveItemToParticipant: () => {},
  moveItemToBill: () => {},
  setBill: () => {},
  addPeople: () => {},
  setSelectedParticipantId: () => {},
});
