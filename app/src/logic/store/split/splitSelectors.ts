import { IParticipant, IReceiptItem } from "@/models";
import { RootState } from '@/logic/store';
import { createSelector } from "@reduxjs/toolkit";

export const selectParticipants = createSelector(
    (state: RootState) => state.split.participants,
    (participants): IParticipant[] => Object.values(participants),
);

export const selectSelectedParticipant = createSelector(
    (state: RootState) => state.split,
    (split): IParticipant | undefined =>
        split.selectedParticipantId
            ? split.participants[split.selectedParticipantId]
            : undefined,
);

export const selectRemainingCount = (state: RootState) =>
    state.split.remainingCount;

export const selectItems = createSelector(
    (state: RootState) => state.split.items,
    (items): IReceiptItem[] => Object.values(items),
);

export const selectIsUploadingReceipt = (state: RootState) =>
    state.split.isUploadingReceipt;

export const selectIsReceiptLoaded = (state: RootState) =>
    state.split.isReceiptLoaded;
