import { ListItem, Text } from '@rneui/themed';
import { IReceiptItem } from '@/models';
import React from 'react';
import { StyleSheet } from 'react-native';

type ReceiptItemContentProps = IReceiptItem & {
  total: number;
};

export const ReceiptItemContent = (props: ReceiptItemContentProps) => {
  const { name, price, total } = props;
  return (
    <>
      <ListItem.Content style={styles.listContent}>
        <ListItem.Title>{name}</ListItem.Title>
        <ListItem.Subtitle>${price.toFixed()} each</ListItem.Subtitle>
      </ListItem.Content>
      <Text>${total.toFixed(2)}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  listContent: { alignItems: 'stretch' },
});
