import React from "react";
import { StyleSheet } from "react-native";
import { ScrollView } from "@/components/ScrollView";
import { ListView } from "@/components/ListView";
import { Text } from "@rneui/themed";
import { View } from "react-native";
import { Filler } from "@/components";

type ReceiptContainerProps = {
  total: number;
  children: React.ReactNode;
};

export const ReceiptContainer = (props: ReceiptContainerProps) => {
  const { total, children } = props;
  return (
    <ListView>
      <ScrollView style={styles.container}>{children}</ScrollView>
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
