import { EzSplitApi, IUploadRequest } from "../api/EzSplitApi";
import { splitSlice } from "./splitSlice";
import { AppThunk } from "../store";

const actions = splitSlice.actions;

export const uploadReceipt =
    (request: IUploadRequest): AppThunk =>
        async (dispatch) => {
            try {
                dispatch(actions.setIsUploadingReceipt(true));
                const receipt = await new EzSplitApi().upload(request);
                dispatch(actions.setReceipt({ receipt }));
            } catch (error) {
                console.error(error);
            } finally {
                dispatch(actions.setIsUploadingReceipt(false));
            }
        };
