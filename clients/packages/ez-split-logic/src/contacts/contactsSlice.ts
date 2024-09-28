import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  IAddContactPayload,
  IContactState,
  IDeleteContactPayload,
} from "./interfaces";
import { uuidv4 } from "../utils/generateGuid";

const contactsSliceName = "contacts";

const initialState: IContactState = {
  contacts: {},
};

export const contactsSlice = createSlice({
  name: contactsSliceName,
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<IAddContactPayload>) => {
      const { person } = action.payload;
      const id = uuidv4();
      state.contacts[id] = { id, ...person };
    },
    removeContact: (state, action: PayloadAction<IDeleteContactPayload>) => {
      delete state.contacts[action.payload.id];
    },
  },
});
