import {IBillItem} from "../../interfaces/IBillItem";
import * as React from 'react';


export interface IReceiptProps {

    title: React.ReactNode;
    items: IBillItem[];

    onItemClick: (itemId: string) => void;
}