import { IItem } from 'ez-split-interfaces';
import * as React from 'react';
import { SplitReceiptItem } from './SplitReceiptItem';
import { ReceiptContainer } from './ReceiptContainer';

type ReceiptCardProps = {
  items: IItem[];
  total: number;
  receiptCount: Record<string, number>;
  participantCount: Record<string, number>;
  onAddItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
};

export const SplitReceipt = (props: ReceiptCardProps) => {
  const {
    items,
    total,
    receiptCount,
    participantCount,
    onAddItem,
    onRemoveItem,
  } = props;

  return (
    <ReceiptContainer total={total}>
      {items
        .filter(({ id }) => receiptCount[id] || participantCount[id])
        .map((item, key) => (
          <SplitReceiptItem
            {...item}
            key={key}
            participantQuantity={participantCount[item.id] || 0}
            quantity={receiptCount[item.id] || 0}
            onAddItemPress={() => onAddItem(item.id)}
            onRemoveItemPress={() => onRemoveItem(item.id)}
          />
        ))}
    </ReceiptContainer>
  );
};
