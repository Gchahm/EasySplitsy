import { IItem } from "ez-split-interfaces";
import * as React from "react";
import { BillItem } from "./BillItem";
import { Card } from "@rneui/base";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

interface IBillCardProps {
  title: string;
  itemsCount: Record<string, number>;
  items: IItem[];
  onRemoveClick: (id: string) => void;
}

export default function BillCard(props: IBillCardProps) {
  const { title, items, itemsCount, onRemoveClick } = props;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  return (
    <Card containerStyle={styles.card} wrapperStyle={styles.card}>
      <Card.Title>{title}</Card.Title>
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16}>
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
      </Animated.ScrollView>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1 },
});
