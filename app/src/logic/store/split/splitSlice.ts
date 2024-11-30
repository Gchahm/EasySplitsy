import { initialState } from "./splitState";
import { IParticipant } from "@/models";
import { uuidv4 } from "@/logic/utils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    IAddParticipantsPayload,
    IMoveItemPayload,
    IRemoveParticipantsPayload,
    ISetReceiptPayload,
    ISetSelectedParticipantId,
} from "./splitActions";

export const splitSliceName = "split";

export const splitSlice = createSlice({
    name: splitSliceName,
    initialState,
    reducers: {
        moveItemToParticipant: (state, action: PayloadAction<IMoveItemPayload>) => {
            const { itemId, quantity, participantId } = action.payload;
            const participant: IParticipant | undefined =
                state.participants[participantId];
            if (!participant) return { ...state };
            const itemQuantity: number = state.remainingCount[itemId] || 0;
            const moveQuantity = quantity > itemQuantity ? itemQuantity : quantity;
            state.remainingCount[itemId] =
                (state.remainingCount[itemId] || 0) - moveQuantity;
            state.participants[participantId].total =
                participant.total + moveQuantity * state.items[itemId].price;
            state.participants[participantId].items[itemId] =
                (participant.items[itemId] || 0) + moveQuantity;
        },
        moveItemToBill: (state, action: PayloadAction<IMoveItemPayload>) => {
            const { participantId, itemId, quantity } = action.payload;
            const participant: IParticipant | undefined =
                state.participants[participantId];
            if (!participant) return;
            const itemQuantity: number = participant.items[itemId] || 0;
            const moveQuantity = quantity > itemQuantity ? itemQuantity : quantity;
            state.remainingCount[itemId] =
                (state.remainingCount[itemId] || 0) + moveQuantity;
            state.participants[participantId].total =
                participant.total - moveQuantity * state.items[itemId].price;
            state.participants[participantId].items[itemId] =
                (participant.items[itemId] || 0) - moveQuantity;
        },
        setReceipt: (state, action: PayloadAction<ISetReceiptPayload>) => {
            state.items = {};
            state.remainingCount = {};
            action.payload.receipt.forEach((item) => {
                state.items[item.id] = item;
                state.remainingCount[item.id] = item.quantity;
            });
        },
        addParticipants: (
            state,
            action: PayloadAction<IAddParticipantsPayload>,
        ) => {
            action.payload.people.forEach((person) => {
                const id = uuidv4();
                state.participants[id] = {
                    ...person,
                    id,
                    total: 0,
                    items: {},
                };
            });
        },
        setSelectedParticipantId: (
            state,
            action: PayloadAction<ISetSelectedParticipantId>,
        ) => {
            const { selectedParticipantId } = action.payload;
            state.selectedParticipantId = selectedParticipantId;
        },
        removeParticipants: (
            state,
            action: PayloadAction<IRemoveParticipantsPayload>,
        ) => {
            const { ids } = action.payload;
            ids.forEach((id) => {
                const items = state.participants[id].items;
                Object.keys(items).forEach((key) => {
                    state.remainingCount[key] =
                        state.remainingCount[key] || 0 + items[key];
                });
                delete state.participants[id];
            });
        },
        setIsUploadingReceipt: (state, action: PayloadAction<boolean>) => {
            state.isUploadingReceipt = action.payload;
        },
    },
});
