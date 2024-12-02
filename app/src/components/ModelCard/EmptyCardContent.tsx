import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';
import React from 'react';
import { Href, Link } from 'expo-router';

export type EmptyCardContentProps = {
  modelName: string;
  createPath: Href<string>;
};

export const EmptyCardContent = (props: EmptyCardContentProps) => {
  const { modelName, createPath } = props;

  return (
    <View style={styles.empty}>
      <Text>No items</Text>
      <Link href={createPath}>Add new {modelName}</Link>
    </View>
  );
};
const styles = StyleSheet.create({
  empty: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
});
