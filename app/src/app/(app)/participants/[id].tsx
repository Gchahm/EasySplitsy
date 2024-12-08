import { AppHeader, SplitReceipt } from '@/components';
import { StyleSheet } from 'react-native';
import { ParticipantSelector } from '@/components/ParticipantSelector';
import * as React from 'react';
import { router, useLocalSearchParams } from 'expo-router';
import { splitActions, splitSelectors, useAppDispatch, useAppSelector } from '@/logic/store';

export default function SplitReceiptScreen() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(splitSelectors.selectItems);
  const remainingCount = useAppSelector(splitSelectors.selectRemainingCount);
  const selectedParticipant = useAppSelector(
    splitSelectors.selectSelectedParticipant
  );

  const { id } = useLocalSearchParams();

  React.useEffect(() => {
    if (!Array.isArray(id)) {
      dispatch(
        splitActions.setSelectedParticipantId({ selectedParticipantId: id })
      );
    }
  }, [id, dispatch]);

  const handleOnConfirmPress = () => {
    router.navigate('/(tabs)/manageParticipants');
  };

  const handleOnRemoveItem = (id: string) => {
    dispatch(
      splitActions.moveItemToBill({
        itemId: id,
        participantId: selectedParticipant!.id,
        quantity: 1
      })
    );
  };

  const handleOnAddItem = (id: string) => {
    dispatch(
      splitActions.moveItemToParticipant({
        itemId: id,
        participantId: selectedParticipant!.id,
        quantity: 1
      })
    );
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
    <>
      {participantCardHeader}
      {!!selectedParticipant && (
        <SplitReceipt
          items={items}
          receiptCount={remainingCount}
          total={selectedParticipant.total}
          participantCount={selectedParticipant.items}
          onRemoveItem={handleOnRemoveItem}
          onAddItem={handleOnAddItem}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
