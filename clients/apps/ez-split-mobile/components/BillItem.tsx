import * as React from "react";
import { Button, Icon, ListItem, useTheme } from "@rneui/themed";
import { IBillItem } from "ez-split-interfaces";

export interface IBillItemProps extends IBillItem {
  onRemoveClick: () => void;
}

export const BillItem: React.FC<IBillItemProps> = (props) => {
  const { onRemoveClick, ...item } = props;

  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title style={{ textAlign: "right" }}>
          {item.name} - {item.price} - {item.quantity}
        </ListItem.Title>
      </ListItem.Content>
      <Icon
        onPressIn={onRemoveClick}
        name="remove-circle-outline"
        type="ionicon"
      />
    </ListItem>
  );
};
