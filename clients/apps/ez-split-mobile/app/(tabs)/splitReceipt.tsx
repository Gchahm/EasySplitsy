import { useBill } from "ez-split-logic";
import BillCard from "@/components/BillCard";
import { StyleSheet } from "react-native";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { ParticipantSelector } from "@/components/ParticipantSelector";
import AppHeader from "@/components/primitives/AppHeader";
import * as React from "react";

export default function SplitReceiptScreen() {
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

  const handleOnConfirmSplit = (split: Record<string, number>) => {
    Object.keys(split).forEach((key) => {
      actions.moveItemToParticipant(key, split[key]);
    });
  };

  const participantCardHeader: React.ReactNode = (
    <AppHeader>
      <ParticipantSelector
        onPreviousClick={canSelectPrevious ? handleOnPreviousClick : undefined}
        onNextClick={canSelectNext ? handleNextClick : undefined}
        participantName={selectedParticipant?.name}
      />
    </AppHeader>
  );

  return (
    <ThemedSafeAreaView style={styles.container}>
      {participantCardHeader}
      <BillCard
        items={items}
        itemsCount={bill}
        onConfirmSplit={handleOnConfirmSplit}
      />
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
