import {IBillContext} from "./IBillContext.ts";
import {useContext} from "react";
import {BillContext} from "./BillContext.tsx";

export const useBill = (): IBillContext => {
    return useContext(BillContext);
};