import * as React from "react";
import { ThemedView } from "../ThemedView";
import { StyleSheet } from "react-native";

type AppHeaderProps = {
  children: React.ReactNode;
};

export default function AppHeader(props: AppHeaderProps) {
  return (
    <ThemedView style={styles.headerContainer}>{props.children}</ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: { paddingVertical: 10, flexDirection: "row" },
});
