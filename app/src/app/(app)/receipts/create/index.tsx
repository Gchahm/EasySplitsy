import React from 'react';
import { Button, Input } from '@rneui/themed';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { router, useNavigation } from 'expo-router';

export default function CreateNewReceipt() {
  const [id, setId] = React.useState('');

  const handleContinuePress = async () => {
    router.navigate(`/receipts/create/${id}`);
  };

  return (
    <ThemedSafeAreaView>
      <Input value={id} onChangeText={setId} />
      <Button onPress={handleContinuePress}>Continue</Button>
    </ThemedSafeAreaView>
  );
}
