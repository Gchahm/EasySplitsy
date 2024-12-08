import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { StyleSheet } from 'react-native';
import * as React from 'react';
import { ContactCard, ReceiptCard } from '@/components/ModelCard';

export default function Home() {
  return (
    <ThemedSafeAreaView id="home" style={styles.page}>
      <ContactCard />
      <ReceiptCard />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
