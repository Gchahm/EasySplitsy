import React from 'react';
import { ListItem } from '@rneui/themed';
import { ScrollView } from '@/components/ScrollView';
import { StyleSheet } from 'react-native';
import { BaseModel } from '@/logic/apis';

export type CardContentType<TAppModel extends BaseModel<any>> = {
  data: TAppModel[];
};

export const CardContent = <TAppModel extends BaseModel<any>>(
  props: CardContentType<TAppModel>,
) => {
  const { data } = props;

  return (
    <ScrollView style={styles.container}>
      {data.map((model, key) => (
        <ListItem key={key}>
          <ListItem.Content>
            <ListItem.Title>{model.toString()}</ListItem.Title>
          </ListItem.Content>
        </ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});
