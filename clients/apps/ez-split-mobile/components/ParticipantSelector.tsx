import { Icon, Input, Text } from "@rneui/themed";
import * as React from "react";
import { StyleSheet, View } from "react-native";

export interface IParticipantSelectorProps {
  onPreviousClick: () => void;
  onNextClick: () => void;
  participantName?: string;
}

export const ParticipantSelector: React.FC<IParticipantSelectorProps> = (
  props,
) => {
  const { onNextClick, onPreviousClick, participantName } = props;

  return (
    <View style={styles.container}>
      <Icon
        onPress={onPreviousClick}
        name="remove-circle-outline"
        type="ionicon"
      />
      <Text>{participantName}</Text>
      <Icon onPress={onNextClick} name="remove-circle-outline" type="ionicon" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-between",
  },
});
