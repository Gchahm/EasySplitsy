import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IContact } from "./interfaces";

export const selectContactById = createSelector(
  (state: RootState) => state.contacts.contacts,
  (_: RootState, id: string) => id,
  (contacts, id): IContact => contacts[id],
);

export const selectContacts = createSelector(
  (state: RootState) => state.contacts.contacts,
  (contacts): IContact[] => Object.values(contacts),
);
