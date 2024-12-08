import React from 'react';
import { Icon, ListItem, Text } from '@rneui/themed';
import { ScrollView } from '@/components/ScrollView';
import { StyleSheet } from 'react-native';
import { BaseModel } from '@/logic/database';

export type SelectionProps = {
  selected: string[];
  onItemPress: (selected: string) => void;
};

export type CardContentType<TAppModel extends BaseModel<any>> = {
  data: TAppModel[];
  selectionProps?: SelectionProps;
};

export const CardContent = <TAppModel extends BaseModel<any>>(
  props: CardContentType<TAppModel>
) => {
  const { data, selectionProps } = props;
  const { onItemPress } = selectionProps || {};


  return (
    <ScrollView style={styles.container}>
      {data.map((model, key) => (
        <ListItem key={key} onPress={() => onItemPress?.(model.id!)}>
          <SelectionIcon {...props} item={model} />
          <ListItem.Content>
            <ListItem.Title>{model.toString()}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const SelectionIcon = (props: CardContentType<any> & { item: any }) => {
  const { item, selectionProps } = props;
  const { selected } = selectionProps || {};

  if (!selected) {
    return <></>;
  }

  return selected.includes(item.id) ? (
    <Icon name="check" />
  ) : (
    <Icon name="close" />
  );
};

const styles = StyleSheet.create({
  container: {}
});
