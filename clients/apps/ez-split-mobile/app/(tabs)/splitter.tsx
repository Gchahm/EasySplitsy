import { useBill } from "ez-split-logic";
import BillCard from "@/components/BillCard";
import { StyleSheet } from "react-native";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { ParticipantSelector } from "@/components/ParticipantSelector";

export default function Splitter() {
  const { bill, selectedParticipant, items, participants, ...actions } =
    useBill();

  const handleOnPreviousClick = () => {
    if (!selectedParticipant) return;

    const index = participants.indexOf(selectedParticipant);

    if (index === 0) return;

    actions.setSelectedParticipantId(participants[index - 1].id);
  };

  const handleNextClick = () => {
    if (!selectedParticipant) return;

    const index = participants.indexOf(selectedParticipant);

    if (index === participants.length - 1) return;

    actions.setSelectedParticipantId(participants[index + 1].id);
  };

  const participantCardHeader: React.ReactNode = (
    <ParticipantSelector
      onPreviousClick={handleOnPreviousClick}
      onNextClick={handleNextClick}
      participantName={selectedParticipant?.name}
    />
  );

  return (
    <ThemedSafeAreaView style={styles.container}>
      <BillCard
        title={participantCardHeader}
        items={items}
        itemsCount={selectedParticipant?.items || {}}
        onRemoveClick={actions.moveItemToBill}
      />
      <BillCard
        title={"bill"}
        items={items}
        itemsCount={bill}
        onRemoveClick={actions.moveItemToParticipant}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
