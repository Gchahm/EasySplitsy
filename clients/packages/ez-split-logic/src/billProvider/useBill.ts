import { IBillContext } from "./IBillContext";
import { useContext } from "react";
import { BillContext } from "./BillContext";

export const useBill = (): IBillContext => {
  return useContext(BillContext);
};
