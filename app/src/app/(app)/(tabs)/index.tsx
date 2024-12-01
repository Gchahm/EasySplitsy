import ImagePicker from '@/components/ImagePicker';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { Platform, StyleSheet } from 'react-native';
import * as React from 'react';
import { Text } from '@rneui/base';
import {
  splitSelectors,
  splitThunk,
  useAppDispatch,
  useAppSelector,
} from '@/logic';
import { EnvironmentVariables } from '@/logic/utils/EnvironmentVariables';
import { useDatabase } from '@/logic/apis/DatabaseContextProvider';
import { IContact, IReceipt } from '@/logic/apis';

export default function Home() {
  const database = useDatabase();

  const [receipts, setReceipts] = React.useState<IReceipt[]>([]);
  const [contacts, setContacts] = React.useState<IContact[]>([]);

  React.useEffect(() => {
    if (database) {
      database.receipts.getAll().then((receipts) => {
        setContacts(receipts);
      });

      database.contacts.getAll().then((contacts) => {
        console.log(contacts);
        setContacts(contacts);
      });
    }
  }, [database]);

  return (
    <ThemedSafeAreaView style={styles.page}>
      {receipts.map((receipt) => (
        <Text key={receipt.id}>{receipt.toString()}</Text>
      ))}

      {contacts.map((contact) => (
        <Text key={contact.id}>{contact.toString()}</Text>
      ))}
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    verticalAlign: 'middle',
  },
});
