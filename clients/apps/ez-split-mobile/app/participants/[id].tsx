import { SplitReceipt } from '@/components';
import { StyleSheet } from 'react-native';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { ParticipantSelector } from '@/components/ParticipantSelector';
import { AppHeader } from '@/components';
import * as React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import {
  splitActions,
  splitSelectors,
  useAppDispatch,
  useAppSelector,
} from 'ez-split-logic';

export default function SplitReceiptScreen() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(splitSelectors.selectItems);
  const remainingCount = useAppSelector(splitSelectors.selectRemainingCount);
  const selectedParticipant = useAppSelector(
    splitSelectors.selectSelectedParticipant,
  );

  const { id } = useLocalSearchParams();

  React.useEffect(() => {
    if (!Array.isArray(id)) {
      dispatch(
        splitActions.setSelectedParticipantId({ selectedParticipantId: id }),
      );
    }
  }, [id, dispatch]);

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
          onRemoveItem={(itemId) =>
            dispatch(
              splitActions.moveItemToBill({
                itemId,
                participantId: selectedParticipant.id,
                quantity: 1,
              }),
            )
          }
          onAddItem={(itemId) =>
            dispatch(
              splitActions.moveItemToParticipant({
                itemId,
                participantId: selectedParticipant.id,
                quantity: 1,
              }),
            )
          }
        />
      )}
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
