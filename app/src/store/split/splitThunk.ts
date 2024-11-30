import { splitSlice } from "./splitSlice";
import { AppThunk } from "../store";

const actions = splitSlice.actions;

export const uploadReceipt =
    (request: unknown): AppThunk =>
        async (dispatch) => {
            try {
                // dispatch(actions.setIsUploadingReceipt(true));
                // const receipt = await new EzSplitApi().upload(request);
                // dispatch(actions.setReceipt({ receipt }));
            } catch (error) {
                // console.error(error);
            } finally {
                dispatch(actions.setIsUploadingReceipt(false));
            }
        };
