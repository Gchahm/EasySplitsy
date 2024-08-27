import * as React from 'react'
import { Button, Icon, ListItem } from '@rneui/base';
import { IBillItem } from 'ez-split-interfaces';

export interface IBillItemProps extends IBillItem {
    onSwipeEnd: () => void;
}

export const BillItem: React.FC<IBillItemProps> = (props) => {
    const { onSwipeEnd, ...item } = props;

    return (
        <ListItem
        >
            <Icon name="label-important-outline" type="material" />
            <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
                <ListItem.Subtitle>{item.price}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron />
        </ListItem>
    )
}


