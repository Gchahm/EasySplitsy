import { useBill } from "ez-split-logic";
import { SafeAreaView } from "react-native-safe-area-context";
import BillCard from "@/components/BillCard";
import { StyleSheet, View } from "react-native";

export default function Splitter() {
  const { bill, selectedParticipant, items, ...actions } = useBill();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.billContainer}>
        <BillCard
          title={selectedParticipant?.name || ""}
          items={items}
          itemsCount={selectedParticipant?.items || {}}
          onRemoveClick={actions.moveItemToBill}
        />
      </View>
      <View style={styles.billContainer}>
        <BillCard
          title={"bill"}
          items={items}
          itemsCount={bill}
          onRemoveClick={actions.moveItemToParticipant}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  billContainer: { flex: 1, margin: 10 },
});
