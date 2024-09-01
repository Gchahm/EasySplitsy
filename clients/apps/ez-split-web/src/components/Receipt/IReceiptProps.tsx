import { IItem } from "ez-split-interfaces";
import * as React from "react";

export interface IReceiptProps {
    headerContent: React.ReactNode;
    items: IItem[];
    itemCount: Record<string, number>;
    onItemClicked: (id: string) => void;
}
