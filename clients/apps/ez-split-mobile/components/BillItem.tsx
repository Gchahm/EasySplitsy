import * as React from "react";
import { Icon, ListItem, Text, useTheme } from "@rneui/themed";
import { IBillItem } from "ez-split-interfaces";
import { StyleSheet } from "react-native";

export interface IBillItemProps extends IBillItem {
  moveQuantity: number;
  onMoveQuantityChange: (id: string, value: number) => void;
  showSplitControl?: boolean;
}

export const BillItem: React.FC<IBillItemProps> = (props) => {
  const { moveQuantity, onMoveQuantityChange, showSplitControl, ...item } =
    props;

  const { theme } = useTheme();

  const handleRemovePress = () => {
    onMoveQuantityChange(item.id, -1);
  };

  const handleAddPress = () => {
    onMoveQuantityChange(item.id, 1);
  };

  const total = item.price * item.quantity;

  return (
    <ListItem containerStyle={styles.container}>
      <Text>${total.toFixed(2)}</Text>
      <ListItem.Content style={styles.listContent}>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>${item.price.toFixed()} each</ListItem.Subtitle>
        <ListItem.Subtitle>{item.quantity} unit(s)</ListItem.Subtitle>
      </ListItem.Content>
      {showSplitControl && (
        <>
          {!!moveQuantity && (
            <Icon
              color={theme.colors.secondary}
              name="remove"
              onPress={handleRemovePress}
            />
          )}
          <Text>
            {moveQuantity}/{item.quantity}
          </Text>
          {moveQuantity < item.quantity && (
            <Icon
              color={theme.colors.secondary}
              name="add"
              onPress={handleAddPress}
            />
          )}
        </>
      )}
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: { margin: 0, paddingHorizontal: 0 },
  listContent: { alignItems: "stretch" },
});
