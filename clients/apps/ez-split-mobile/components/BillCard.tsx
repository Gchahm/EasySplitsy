import { IItem } from "ez-split-interfaces";
import * as React from "react";
import { BillItem } from "./BillItem";
import { StyleSheet } from "react-native";
import { ScrollView } from "./ScrollView";
import { ListView } from "./ListView";
import { Button, Text, Icon, useTheme } from "@rneui/themed";
import { View } from "react-native";
import ConfirmAction from "./ConfirmAction";
import Filler from "./primitives/Filler";

interface IBillCardProps {
  itemsCount: Record<string, number>;
  items: IItem[];
  onConfirmSplit: (items: Record<string, number>) => void;
}

export default function BillCard(props: IBillCardProps) {
  const { items, itemsCount, onConfirmSplit } = props;

  const [isEditMode, setIsEditMode] = React.useState(false);
  const [split, setSplit] = React.useState<Record<string, number>>({});
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = React.useState(false);

  const { theme } = useTheme();

  const total = items.reduce(
    (sum, item) => sum + item.price * itemsCount[item.id],
    0,
  );

  const resetSplit = () => {
    setIsEditMode(false);
    setSplit({});
    setIsConfirmDialogOpen(false);
  };

  const handleSplitPress = () => setIsEditMode(true);
  const handleCancelPress = () => {
    if (Object.keys(split).length > 0) {
      setIsConfirmDialogOpen(true);
    } else {
      resetSplit();
    }
  };

  const handleConfirmPress = () => {
    onConfirmSplit(split);
    resetSplit();
  };

  const handleMoveQuantityChange = (id: string, value: number) => {
    setSplit((prev) => ({
      ...prev,
      [id]: value + prev[id] || 0,
    }));
  };

  return (
    <ListView>
      <ConfirmAction
        isVisible={isConfirmDialogOpen}
        title="are you sure"
        text="this will undo all your changes to splitting"
        onConfirm={resetSplit}
        onDecline={() => setIsConfirmDialogOpen(false)}
      />
      <View style={styles.header}>
        <Text>Receipt</Text>
      </View>
      <ScrollView style={styles.container}>
        {items
          .filter((item) => itemsCount[item.id])
          .map((item, key) => (
            <BillItem
              {...item}
              key={key}
              showSplitControl={isEditMode}
              quantity={itemsCount[item.id]}
              moveQuantity={split[item.id] || 0}
              onMoveQuantityChange={handleMoveQuantityChange}
            />
          ))}
      </ScrollView>
      <View style={styles.footer}>
        <Text>${total.toFixed(2)}</Text>
        <Filler />
        {isEditMode ? (
          <>
            <Button onPress={handleCancelPress} type="clear" color="error">
              Cancel
            </Button>
            <Button onPress={handleConfirmPress} type="clear" color="secondary">
              <Icon name="send" color={theme.colors.primary} />
            </Button>
          </>
        ) : (
          <Button onPress={handleSplitPress} type="outline" color="primary">
            Split
          </Button>
        )}
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
