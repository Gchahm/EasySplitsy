import { useBill } from "ez-split-logic";
import BillCard from "@/components/BillCard";
import { StyleSheet } from "react-native";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { ParticipantSelector } from "@/components/ParticipantSelector";

export default function Splitter() {
  const { bill, selectedParticipant, items, participants, ...actions } =
    useBill();

  const selectedParticipantIndex: number | undefined =
    selectedParticipant && participants.indexOf(selectedParticipant);

  const handleOnPreviousClick = () => {
    selectedParticipant &&
      actions.setSelectedParticipantId(
        participants[selectedParticipantIndex! - 1].id,
      );
  };

  const handleNextClick = () => {
    selectedParticipant &&
      actions.setSelectedParticipantId(
        participants[selectedParticipantIndex! + 1].id,
      );
  };

  const canSelectPrevious: boolean = selectedParticipantIndex !== 0;
  const canSelectNext: boolean =
    selectedParticipantIndex !== participants.length - 1;

  const participantCardHeader: React.ReactNode = (
    <ParticipantSelector
      onPreviousClick={canSelectPrevious ? handleOnPreviousClick : undefined}
      onNextClick={canSelectNext ? handleNextClick : undefined}
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
