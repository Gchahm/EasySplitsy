import { EzSplitApi, IUploadRequest } from "../api/EzSplitApi";
import { splitSlice } from "./splitSlice";
import { AppThunk } from "../store";
import { IPerson, IReceiptItem } from "ez-split-interfaces";

const actions = splitSlice.actions;

export const uploadReceipt =
    (request: IUploadRequest): AppThunk =>
        async (dispatch) => {
            try {
                const receipt = await new EzSplitApi().upload(request);
                dispatch(actions.setReceipt({ receipt }));
            } catch (error) {
                console.error(error);
            }
        };

export const moveItemToParticipant =
    (itemId: string, quantity: number = 1): AppThunk =>
        (dispatch, state) => {
            const { selectedParticipantId } = state().split;
            if (!selectedParticipantId) {
                return;
            }
            dispatch(
                actions.moveItemToParticipant({
                    itemId,
                    participantId: selectedParticipantId,
                    quantity,
                }),
            );
        };

export const moveItemToBill =
    (itemId: string, quantity: number = 1): AppThunk =>
        (dispatch, state) => {
            const { selectedParticipantId } = state().split;
            if (!selectedParticipantId) {
                return;
            }
            dispatch(
                actions.moveItemToBill({
                    itemId,
                    participantId: selectedParticipantId,
                    quantity,
                }),
            );
        };

export const setBill =
    (receipt: IReceiptItem[]): AppThunk =>
        (dispatch) => {
            dispatch(actions.setReceipt({ receipt }));
        };

export const addPeople =
    (people: IPerson[]): AppThunk =>
        (dispatch) => {
            dispatch(
                actions.addParticipants({
                    people,
                }),
            );
        };

export const setSelectedParticipantId =
    (selectedParticipantId: string | undefined): AppThunk =>
        (dispatch) => {
            dispatch(actions.setSelectedParticipantId({ selectedParticipantId }));
        };

export const removeParticipants =
    (ids: string[]): AppThunk =>
        (dispatch) => {
            dispatch(actions.removeParticipants({ ids }));
        };
