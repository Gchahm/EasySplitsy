import ConfirmAction from "@/components/ConfirmAction";
import ParticipantInput from "@/components/ParticipantInput";
import { Participants } from "@/components/Participants";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import AppHeader from "@/components/primitives/AppHeader";
import { router } from "expo-router";
import { useBill } from "ez-split-logic";
import * as React from "react";
import { StyleSheet } from "react-native";

export default function ManageParticipantsScreen() {
  const { selectedParticipant, participants, ...actions } = useBill();
  const [name, setName] = React.useState("");
  const [removeId, setRemoveId] = React.useState<string | undefined>();
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  const handleAddPerson = () => {
    if (name !== "") {
      actions.addPeople([{ name }]);
      setName("");
    }
  };

  const clearRemoveId = () => {
    setRemoveId(undefined);
    setIsDialogOpen(false);
  };

  const removeParticipant = () => {
    if (removeId) {
      actions.removeParticipants([removeId]);
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

  const confirmDialog = (
    <ConfirmAction
      isVisible={isDialogOpen}
      title={"Are you sure?"}
      text={
        "This participant has items in his troley removing it will send them back to bill"
      }
      onConfirm={removeParticipant}
      onDecline={clearRemoveId}
    />
  );

  const handleOnCreatePress = (id: string) => {
    router.navigate(`/(tabs)/participants/${id}`);
  };

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
      <Participants
        participants={participants}
        onCreatePress={handleOnCreatePress}
        onRemovePress={handleRemoveClick}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
