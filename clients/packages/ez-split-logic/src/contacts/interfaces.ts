import { IPerson } from "ez-split-interfaces";

export interface IContact extends IPerson {
  id: string;
}

export interface IContactState {
  contacts: Record<string, IContact>;
}

export interface IAddContactPayload {
  person: IPerson;
}

export interface IDeleteContactPayload {
  id: string;
}
