import * as React from "react";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from "react-native";
import { MARGIN_HORIZONTAL } from "@/constants/Padding";

type AppHeaderProps = {
  children: React.ReactNode;
};

export default function AppHeader(props: AppHeaderProps) {
  return (
    <ThemedView style={styles.headerContainer}>{props.children}</ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 8,
    marginHorizontal: MARGIN_HORIZONTAL,
    flexDirection: "row",
  },
});
