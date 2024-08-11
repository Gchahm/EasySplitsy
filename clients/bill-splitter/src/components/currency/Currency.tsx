import * as React from "react";
import { ICurrencyProps } from ".";

export const Currency: React.FC<ICurrencyProps> = (props) => {
  const { value } = props;
  return <>$ {value}</>;
};
