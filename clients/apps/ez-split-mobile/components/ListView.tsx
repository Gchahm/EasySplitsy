import * as React from "react";
import { Card, CardProps } from "@rneui/themed";
import { StyleSheet } from "react-native";

type ListViewProps = CardProps & {
  children: React.ReactNode;
};

export const ListView = (props: ListViewProps) => {
  return (
    <Card
      containerStyle={[styles.cardContainer, props.containerStyle]}
      wrapperStyle={[styles.cardWrapper, props.wrapperStyle]}
    >
      {props.children}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardContainer: {
    flex: 1,
  },
  cardWrapper: { flex: 1 },
});
