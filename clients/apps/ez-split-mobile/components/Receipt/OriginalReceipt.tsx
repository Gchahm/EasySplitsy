import { IBillItem } from "ez-split-interfaces";
import { ReceiptContainer } from "./ReceiptContainer";
import { ReceiptItem } from "./ReceiptItem";

type OriginalReceiptProps = {
  total: number;
  items: IBillItem[];
};

export const OriginalReceipt = (props: OriginalReceiptProps) => {
  const { items, total } = props;

  return (
    <ReceiptContainer total={total}>
      {items.map((item, key) => (
        <ReceiptItem {...item} key={key} />
      ))}
    </ReceiptContainer>
  );
};
