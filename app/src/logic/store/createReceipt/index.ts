import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@/logic';


const createReceiptName = 'receiptCreation';

interface ICreateReceipt {
  name: string;
  contacts: string[];
}

const createReceiptInitialState: ICreateReceipt = {
  name: '',
  contacts: []
};

const createReceiptSlice = createSlice({
    name: createReceiptName,
    initialState: createReceiptInitialState,
    reducers: {
      addContact: (state, action: PayloadAction<string>) => {
        state.contacts.push(action.payload);
      }
    }
  }
);


export const createReceiptSliceReducer = createReceiptSlice.reducer;
export const createReceiptActions = createReceiptSlice.actions;


const selectSlice = (state: RootState) => state.createReceipt;

export const selectContacts = createSelector(selectSlice,
  (slice) => slice.contacts
);