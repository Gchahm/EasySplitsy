import * as React from "react";
import { Button, ListItem } from "@rneui/themed";
import { IBillItem } from "ez-split-interfaces";
import { StyleSheet } from "react-native";
import { ScreenWidth } from "@rneui/base";

export interface IBillItemProps extends IBillItem {
  onRemoveClick: () => void;
}

export const BillItem: React.FC<IBillItemProps> = (props) => {
  const { onRemoveClick, ...item } = props;

  const rightContent = (
    <Button style={styles.rightButton} onPress={onRemoveClick}>
      move
    </Button>
  );

  return (
    <ListItem.Swipeable
      rightWidth={ScreenWidth / 5}
      rightStyle={styles.rightContent}
      rightContent={rightContent}
    >
      <ListItem.Content>
        <ListItem.Title style={{ textAlign: "right" }}>
          ${item.price} {item.name}
        </ListItem.Title>
        <ListItem.Subtitle>{item.quantity} remaining</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem.Swipeable>
  );
};

const styles = StyleSheet.create({
  rightContent: { paddingRight: 5 },
  rightButton: {
    height: "100%",
    minHeight: "100%",
  },
});
