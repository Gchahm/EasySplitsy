import React from 'react';
import { ListItem } from '@rneui/themed';
import { ScrollView } from '@/components/ScrollView';
import { StyleSheet } from 'react-native';
import { BaseModel, Contact, Receipt } from '@/logic/apis';

export const CardContent = <TAppModel extends BaseModel<any>>(props: {
  data: TAppModel[];
}) => {
  const { data } = props;

  return (
    <ScrollView style={styles.container}>
      {data.map((model) => (
        <ListItem key={model.id}>
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
