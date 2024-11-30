import ConfirmAction from '@/components/ConfirmAction';
import ParticipantInput from '@/components/ParticipantInput';
import { Participants } from '@/components/Participants';
import { ThemedSafeAreaView } from '@/components/ThemedSafeView';
import { AppHeader } from '@/components';
import { Card, Text } from '@rneui/themed';
import { router } from 'expo-router';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { splitActions, splitSelectors, useAppDispatch, useAppSelector } from '@/logic/store';

export default function ManageParticipantsScreen() {
  const dispatch = useAppDispatch();
  const participants = useAppSelector(splitSelectors.selectParticipants);
  const remainingCount = useAppSelector(splitSelectors.selectRemainingCount);
  const items = useAppSelector(splitSelectors.selectItems);
  const [name, setName] = React.useState('');
  const [removeId, setRemoveId] = React.useState<string | undefined>();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const receiptRemaining = items.reduce(
    (sum, { id, price }) => sum + price * remainingCount[id] || 0,
    0
  );

  const handleAddPerson = () => {
    if (name !== '') {
      dispatch(splitActions.addParticipants({ people: [{ name }] }));
      setName('');
    }
  };

  const clearRemoveId = () => {
    setRemoveId(undefined);
    setIsDialogOpen(false);
  };

  const removeParticipant = () => {
    if (removeId) {
      dispatch(splitActions.removeParticipants({ ids: [removeId] }));
      clearRemoveId();
    }
  };

  const handleRemoveClick = (id: string) => {
    setRemoveId(id);
    const participant = participants.find((p) => p.id === id);
    if (participant && Object.keys(participant.items).length > 0) {
      setIsDialogOpen(true);
    } else {
      removeParticipant();
    }
  };

  const handleOnCreatePress = (id: string) => {
    router.navigate(`/participants/${id}`);
  };

  const confirmDialog = (
    <ConfirmAction
      isVisible={isDialogOpen}
      title={'Are you sure?'}
      text={
        'This participant has items in his troley removing it will send them back to bill'
      }
      onConfirm={removeParticipant}
      onDecline={clearRemoveId}
    />
  );

  return (
    <ThemedSafeAreaView style={styles.container}>
      {confirmDialog}
      <AppHeader>
        <ParticipantInput
          name={name}
          onNameChange={setName}
          onAddClick={handleAddPerson}
        />
      </AppHeader>
      <Card>
        <Text>${receiptRemaining.toFixed(2)} remaining</Text>
      </Card>
      <Participants
        participants={participants}
        onCreatePress={handleOnCreatePress}
        onRemovePress={handleRemoveClick}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 }
});
