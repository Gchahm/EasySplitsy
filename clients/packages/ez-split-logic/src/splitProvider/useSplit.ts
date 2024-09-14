import { ISplitContext } from "./ISplitContext";
import { useContext } from "react";
import { SplitContext } from "./SplitContext";

export const useSplit = (): ISplitContext => {
  return useContext(SplitContext);
};
