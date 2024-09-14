import React from 'react';
import { ReceiptItemContent } from './ReceiptItemContent';
import { IReceiptItem } from 'ez-split-interfaces';
import { ListItem } from '@rneui/themed';

type ReceiptItemProps = IReceiptItem & {};
export const ReceiptItem = (props: ReceiptItemProps) => {
  const { ...item } = props;
  return (
    <ListItem>
      <ReceiptItemContent {...item} total={item.price * item.quantity} />
    </ListItem>
  );
};
