import { IItem } from "ez-split-interfaces";
import * as React from "react";
import { ReceiptItem } from "./ReceiptItem";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ScrollView";
import { ListView } from "@/components/ListView";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Filler } from "@/components";

interface IBillCardProps {
  items: IItem[];
  total: number;
  receiptCount: Record<string, number>;
  participantCount: Record<string, number>;
  onAddItem: (id: string) => void;
  onRemoveItem: (id: string) => void;
}

export const SplitReceipt = (props: IBillCardProps) => {
  const {
    items,
    total,
    receiptCount,
    participantCount,
    onAddItem,
    onRemoveItem,
  } = props;

  return (
    <ListView>
      <ScrollView style={styles.container}>
        <View style={styles.header}></View>
        {items
          .filter(({ id }) => receiptCount[id] || participantCount[id])
          .map((item, key) => (
            <ReceiptItem
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
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  footer: { flexDirection: "row", marginTop: 8 },
  header: {
    alignItems: "center",
  },
});
