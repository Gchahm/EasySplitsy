import * as React from "react";
import { Icon, ListItem, Text, useTheme } from "@rneui/themed";
import { IBillItem } from "ez-split-interfaces";
import { StyleSheet } from "react-native";

export interface IBillItemProps extends IBillItem {
  participantQuantity: number;
  onAddItemPress: () => void;
  onRemoveItemPress: () => void;
}

export const BillItem: React.FC<IBillItemProps> = (props) => {
  const { participantQuantity, onAddItemPress, onRemoveItemPress, ...item } =
    props;

  const { theme } = useTheme();

  const total = item.price * participantQuantity;
  const totalCount = item.quantity + participantQuantity;

  return (
    <ListItem containerStyle={styles.container}>
      <>
        {!!participantQuantity && (
          <Icon
            color={theme.colors.secondary}
            name="remove"
            onPress={onRemoveItemPress}
          />
        )}
        <Text>
          {participantQuantity}/{totalCount}
        </Text>
        {participantQuantity < totalCount && (
          <Icon
            color={theme.colors.secondary}
            name="add"
            onPress={onAddItemPress}
          />
        )}
      </>
      <ListItem.Content style={styles.listContent}>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>${item.price.toFixed()} each</ListItem.Subtitle>
      </ListItem.Content>
      <Text>${total.toFixed(2)}</Text>
    </ListItem>
  );
};

const styles = StyleSheet.create({
  container: { margin: 0, paddingHorizontal: 0 },
  listContent: { alignItems: "stretch" },
});
