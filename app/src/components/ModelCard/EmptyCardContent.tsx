import { StyleSheet, View } from 'react-native';
import { Text } from '@rneui/themed';
import React from 'react';

export const EmptyCardContent = () => {
  return (
    <View style={styles.empty}>
      <Text>No items</Text>
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
