import ParticipantInput from "@/components/ParticipantInput";
import { Participants } from "@/components/Participants";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { useBill } from "ez-split-logic";
import * as React from "react";
import { StyleSheet } from "react-native";

export default function ManageParticipants() {
  const { selectedParticipant, participants, ...actions } = useBill();
  const [name, setName] = React.useState("");

  React.useEffect(() => {
    const participants = "123456789123456789"
      .split("")
      .map(() => ({ name: "Gustavo" }));
    actions.addPeople(participants);
  }, []);

  const handleAddPerson = () => {
    if (name !== "") {
      actions.addPeople([{ name }]);
      setName("");
    }
  };

  return (
    <ThemedSafeAreaView style={styles.container}>
      <ParticipantInput
        name={name}
        onNameChange={setName}
        onAddClick={handleAddPerson}
      />
      <Participants
        participants={participants}
        onRemovePress={(id) => actions.removeParticipants([id])}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
