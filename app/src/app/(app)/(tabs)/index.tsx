import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { useDatabase } from '@/logic/apis/DatabaseContextProvider';
import { ContactCard, ReceiptCard } from '@/components/ModelCard';

export default function Home() {
  const database = useDatabase();

  return (
    <ThemedSafeAreaView style={styles.page}>
      {database && (
        <>
          <ContactCard repository={database.contacts} />
          <ReceiptCard repository={database.contacts} />
        </>
      )}
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
