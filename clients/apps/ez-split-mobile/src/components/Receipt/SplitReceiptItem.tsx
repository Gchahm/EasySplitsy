import * as React from 'react';
import { Icon, ListItem, Text, useTheme } from '@rneui/themed';
import { IReceiptItem } from '@/models';
import { StyleSheet } from 'react-native';
import { ReceiptItemContent } from './ReceiptItemContent';

export interface IReceiptItemProps extends IReceiptItem {
  participantQuantity: number;
  onAddItemPress: () => void;
  onRemoveItemPress: () => void;
}

export const SplitReceiptItem: React.FC<IReceiptItemProps> = (props) => {
  const { participantQuantity, onAddItemPress, onRemoveItemPress, ...item } =
    props;

  const { theme } = useTheme();

  const total = item.price * participantQuantity;
  const totalCount = item.quantity + participantQuantity;
  const removeDisabled = participantQuantity === 0;
  const addDisabled = participantQuantity === totalCount;

  return (
    <ListItem containerStyle={styles.container}>
      <Icon
        color={removeDisabled ? 'transparent' : theme.colors.error}
        name="remove"
        onPress={onRemoveItemPress}
        disabled={removeDisabled}
      />
      <Text>
        {participantQuantity}/{totalCount}
      </Text>
      <Icon
        color={addDisabled ? 'transparent' : theme.colors.success}
        name="add"
        onPress={onAddItemPress}
        disabled={addDisabled}
      />
      <ReceiptItemContent total={total} {...item} />
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: { margin: 0, paddingHorizontal: 0 },
  listContent: { alignItems: 'stretch' },
});
