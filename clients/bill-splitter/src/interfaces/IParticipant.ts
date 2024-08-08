import {IBillItem} from "./IBillItem";

export interface IParticipant {
    id: string;
    name: string;
    items?: IBillItem[];
}

