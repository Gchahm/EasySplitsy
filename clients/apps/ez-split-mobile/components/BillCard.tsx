import { IItem } from "ez-split-interfaces";
import * as React from "react";
import { BillItem } from "./BillItem";
import { StyleSheet } from "react-native";
import { ScrollView } from "./ScrollView";
import { ListView } from "./ListView";

interface IBillCardProps {
  title: React.ReactNode;
  itemsCount: Record<string, number>;
  items: IItem[];
  onRemoveClick: (id: string) => void;
}

export default function BillCard(props: IBillCardProps) {
  const { title, items, itemsCount, onRemoveClick } = props;

  return (
    <ScrollView style={styles.container}>
      <ListView>
        {items
          .filter((item) => itemsCount[item.id])
          .map((item, key) => (
            <BillItem
              {...item}
              key={key}
              quantity={itemsCount[item.id]}
              onRemoveClick={() => onRemoveClick(item.id)}
            />
          ))}
      </ListView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
});
