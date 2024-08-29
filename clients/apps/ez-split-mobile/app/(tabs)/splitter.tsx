import { useBill } from "ez-split-logic";
import BillCard from "@/components/BillCard";
import { StyleSheet } from "react-native";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";

export default function Splitter() {
  const { bill, selectedParticipant, items, ...actions } = useBill();

  return (
    <ThemedSafeAreaView style={styles.container}>
      <BillCard
        title={selectedParticipant?.name || ""}
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
