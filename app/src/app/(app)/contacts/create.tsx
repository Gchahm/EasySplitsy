import React from 'react';
import { Button, Input } from '@rneui/themed';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { useDatabase } from '@/logic/apis/DatabaseContextProvider';
import { Contact } from '@/logic/apis';
import { router } from 'expo-router';

export default function CreateNewContact() {
  const [name, setName] = React.useState('');
  const database = useDatabase();

  const onSubmit = async () => {
    if (database) {
      await database.contacts.create(new Contact({ name }));
      router.back();
    }
  };

  return (
    <ThemedSafeAreaView>
      <Input value={name} onChangeText={setName} />
      <Button onPress={onSubmit}>Create</Button>
    </ThemedSafeAreaView>
  );
}
