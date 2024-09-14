import React from "react";
import { ReceiptItemContent } from "./ReceiptItemContent";
import { IBillItem } from "ez-split-interfaces";
import { ListItem } from "@rneui/themed";

type ReceiptItemProps = IBillItem & {};
export const ReceiptItem = (props: ReceiptItemProps) => {
  const { ...item } = props;
  return (
    <ListItem>
      <ReceiptItemContent {...item} />
    </ListItem>
  );
};
