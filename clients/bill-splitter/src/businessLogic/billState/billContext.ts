import * as React from "react";
import {IBillContext} from "./IBillContext";

export const BillContext = React.createContext<IBillContext>({
    isBillLoaded: false,
    billItems: [],
    participants: [],
    selectedParticipant: undefined,
    moveItemToParticipant: () => {
    },
    moveItemToBill: () => {
    },
    setBill: () => {
    },
    addParticipants: () => {
    },
    setSelectedParticipantId: () => {
    }
});