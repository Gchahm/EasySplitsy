import { useSplit } from 'ez-split-logic';
import { SplitReceipt } from '@/components';
import { StyleSheet } from 'react-native';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { ParticipantSelector } from '@/components/ParticipantSelector';
import { AppHeader } from '@/components';
import * as React from 'react';
import { router, useLocalSearchParams } from 'expo-router';

export default function SplitReceiptScreen() {
  const {
    remainingCount,
    selectedParticipant,
    items,
    participants,
    ...actions
  } = useSplit();

  const { id } = useLocalSearchParams();

  React.useEffect(() => {
    if (!Array.isArray(id)) {
      actions.setSelectedParticipantId(id);
    }
  }, [id]);

  const handleOnConfirmPress = () => {
    router.navigate('/(tabs)/manageParticipants');
  };

  const participantCardHeader: React.ReactNode = (
    <AppHeader>
      <ParticipantSelector
        onConfirmPress={handleOnConfirmPress}
        participantName={selectedParticipant?.name}
      />
    </AppHeader>
  );

  return (
    <ThemedSafeAreaView style={styles.container}>
      {participantCardHeader}
      {!!selectedParticipant && (
        <SplitReceipt
          items={items}
          receiptCount={remainingCount}
          total={selectedParticipant.total}
          participantCount={selectedParticipant.items}
          onRemoveItem={actions.moveItemToBill}
          onAddItem={actions.moveItemToParticipant}
        />
      )}
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
