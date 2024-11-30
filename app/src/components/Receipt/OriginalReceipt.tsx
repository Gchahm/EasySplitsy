import { ReceiptContainer } from './ReceiptContainer';
import { ReceiptItem } from './ReceiptItem';
import { IReceiptItem } from '@/models';

type OriginalReceiptProps = {
  total: number;
  items: IReceiptItem[];
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
