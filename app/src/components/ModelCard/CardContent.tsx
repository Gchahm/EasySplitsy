import React from 'react';
import { Icon, ListItem } from '@rneui/themed';
import { ScrollView } from '@/components/ScrollView';
import { StyleSheet } from 'react-native';
import { BaseModel } from '@/logic/apis';

export type CardContentType<TAppModel extends BaseModel<any>> = {
  data: TAppModel[];
  selected?: TAppModel[];
  setSelected: (selected: TAppModel[]) => void;
};

export const CardContent = <TAppModel extends BaseModel<any>>(
  props: CardContentType<TAppModel>,
) => {
  const { data, selected, setSelected } = props;

  const onItemPress = (item: TAppModel) => {
    if (!selected) {
      return;
    }

    if (selected.includes(item)) {
      setSelected(selected.filter((selectedItem) => selectedItem !== item));
    } else {
      setSelected([...selected, item]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {data.map((model, key) => (
        <ListItem key={key} onPress={() => onItemPress(model)}>
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
  const { selected, item } = props;

  if (!selected) {
    return <></>;
  }

  return selected.includes(item) ? (
    <Icon name="check" />
  ) : (
    <Icon name="close" />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
