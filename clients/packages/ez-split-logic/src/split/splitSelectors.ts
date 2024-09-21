import { IParticipant, IReceiptItem } from "ez-split-interfaces";
import { RootState } from "../store";

export const selectParticipants = (state: RootState): IParticipant[] =>
    Object.values(state.split.participants);

export const selectSelectedParticipant = (
    state: RootState,
): IParticipant | undefined =>
    state.split.selectedParticipantId
        ? state.split.participants[state.split.selectedParticipantId]
        : undefined;

export const selectRemainingCount = (state: RootState) =>
    state.split.remainingCount;

export const selectItems = (state: RootState): IReceiptItem[] =>
    Object.values(state.split.items);

export const selectIsUploadingReceipt = (state: RootState) =>
    state.split.isUploadingReceipt;

export const selectIsReceiptLoaded = (state: RootState) =>
    state.split.isReceiptLoaded;
