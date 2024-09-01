import { Button, Icon, Input, Text, useTheme } from "@rneui/themed";
import * as React from "react";
import { StyleSheet, View } from "react-native";

export interface IParticipantSelectorProps {
  onCancelPress?: () => void;
  onConfirmPress?: () => void;
  participantName?: string;
}

export const ParticipantSelector: React.FC<IParticipantSelectorProps> = (
  props,
) => {
  const { onConfirmPress, onCancelPress, participantName } = props;
  const { theme } = useTheme();

  return (
    <View style={styles.container}>
      <View style={styles.middle}>
        <Text>{participantName}</Text>
      </View>
      <View style={styles.buttons}>
        {onCancelPress && (
          <Button type="clear" color="error" onPress={onCancelPress}>
            <Icon
              name="close-circle-outline"
              type="ionicon"
              color={theme.colors.error}
            />
          </Button>
        )}
        <Button type="clear" color="secondary" onPress={onConfirmPress}>
          <Icon
            name="checkmark-circle-outline"
            type="ionicon"
            color={theme.colors.success}
          />
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
  },
  middle: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  buttons: {
    alignItems: "flex-end",
    flexDirection: "row",
  },
});
