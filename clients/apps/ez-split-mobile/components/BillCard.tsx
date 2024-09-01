import { IItem } from "ez-split-interfaces";
import * as React from "react";
import { BillItem } from "./BillItem";
import { StyleSheet } from "react-native";
import { ScrollView } from "./ScrollView";
import { ListView } from "./ListView";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import Filler from "./primitives/Filler";

interface IBillCardProps {
  items: IItem[];
  receiptCount: Record<string, number>;
  participantCount: Record<string, number>;
  onAddItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

export default function BillCard(props: IBillCardProps) {
  const { items, receiptCount, participantCount, onAddItem, onRemoveItem } =
    props;

  const total = items.reduce(
    (sum, item) => sum + item.price * participantCount[item.id] || 0,
    0,
  );

  return (
    <ListView>
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        {items
          .filter(({ id }) => receiptCount[id] || participantCount[id])
          .map((item, key) => (
            <BillItem
              {...item}
              key={key}
              participantQuantity={participantCount[item.id] || 0}
              quantity={receiptCount[item.id] || 0}
              onAddItemPress={() => onAddItem(item.id)}
              onRemoveItemPress={() => onRemoveItem(item.id)}
            />
          ))}
      </ScrollView>
      <View style={styles.footer}>
        <Filler />
        <Text>${total.toFixed(2)}</Text>
      </View>
    </ListView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: { flexDirection: "row", marginTop: 8 },
  header: {
    alignItems: "center",
  },
});
