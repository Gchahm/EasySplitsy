import { IItem } from "ez-split-interfaces";
import * as React from "react";
import { BillItem } from "./BillItem";
import { Button, Card } from "@rneui/themed";
import { StyleSheet } from "react-native";
import Animated, { useAnimatedRef } from "react-native-reanimated";

interface IBillCardProps {
  title: React.ReactNode;
  itemsCount: Record<string, number>;
  items: IItem[];
  onRemoveClick: (id: string) => void;
}

export default function BillCard(props: IBillCardProps) {
  const { title, items, itemsCount, onRemoveClick } = props;
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const [resetFn, setResetFn] = React.useState<() => void>(() => {});
  React.useEffect(() => {
    console.log(resetFn);
    return () => resetFn();
  }, [resetFn]);

  const handleSwipe = (reset: () => void) => {
    console.log("handle swipe", reset);
    setResetFn(reset);
  };

  return (
    <Animated.ScrollView
      style={styles.container}
      ref={scrollRef}
      scrollEventThrottle={16}
    >
      <Card
        containerStyle={styles.cardContainer}
        wrapperStyle={styles.cardWrapper}
      >
        {items
          .filter((item) => itemsCount[item.id])
          .map((item, key) => (
            <BillItem
              onSwipe={handleSwipe}
              {...item}
              key={key}
              quantity={itemsCount[item.id]}
              onRemoveClick={() => onRemoveClick(item.id)}
            />
          ))}
      </Card>
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  cardContainer: {
    flex: 1,
    overflow: "hidden",
    margin: 0,
    padding: 0,
    paddingTop: 8,
  },
  cardWrapper: { flex: 1, overflow: "hidden" },
});
