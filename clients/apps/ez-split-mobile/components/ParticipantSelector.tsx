import { Icon, Input, Text } from "@rneui/themed";
import * as React from "react";
import { StyleSheet, View } from "react-native";

export interface IParticipantSelectorProps {
  onPreviousClick?: () => void;
  onNextClick?: () => void;
  participantName?: string;
}

export const ParticipantSelector: React.FC<IParticipantSelectorProps> = (
  props,
) => {
  const { onNextClick, onPreviousClick, participantName } = props;

  return (
    <View style={styles.container}>
      {onPreviousClick && (
        <Icon
          onPress={onPreviousClick}
          name="arrow-back-outline"
          type="ionicon"
        />
      )}
      <Text style={styles.middle}>{participantName}</Text>
      {onNextClick && (
        <Icon
          onPress={onNextClick}
          name="arrow-forward-outline"
          type="ionicon"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "stretch",
  },
  middle: {
    flex: 1,
  },
});
