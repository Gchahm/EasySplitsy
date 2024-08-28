import * as React from "react";
import { Button, Icon, ListItem } from "@rneui/base";
import { IBillItem } from "ez-split-interfaces";

export interface IBillItemProps extends IBillItem {
  onRemoveClick: () => void;
}

export const BillItem: React.FC<IBillItemProps> = (props) => {
  const { onRemoveClick, ...item } = props;

  return (
    <ListItem.Swipeable
      rightContent={(reset) => (
        <Button
          title={"remove"}
          onPress={() => {
            onRemoveClick();
            reset();
          }}
          icon={{ name: "info", color: "white" }}
          buttonStyle={{ minHeight: "100%" }}
        >
          test
        </Button>
      )}
    >
      <ListItem.Content>
        <ListItem.Title>
          {item.name} - {item.quantity}
        </ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem.Swipeable>
  );
};
