import { splitSlice } from './splitSlice';
import { AppThunk } from '../store';
import { translateImage } from '@/logic/apis/firebase/functions';

const actions = splitSlice.actions;


export const uploadReceipt =
  (uri: string): AppThunk =>
    async (dispatch) => {
      try {
        dispatch(actions.setIsUploadingReceipt(true));
        const receipt = await translateImage(uri);
        dispatch(actions.setReceipt({
          receipt: receipt.result.items
            .map((item, index) => ({ id: `${index}`, ...item }))
        }));
      } catch (error) {
        // console.error(error);
      } finally {
        dispatch(actions.setIsUploadingReceipt(false));
      }
    };
