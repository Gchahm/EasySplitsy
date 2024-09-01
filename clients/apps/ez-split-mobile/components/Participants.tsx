import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, ListItem, useTheme } from "@rneui/themed";
import { ScrollView } from "./ScrollView";
import { ListView } from "./ListView";
import { IParticipant } from "ez-split-interfaces";
import { ScreenHeight } from "@rneui/base";
import ContactSvg from "@/constants/svgs/contact";

type ParticipantsProps = {
  participants: IParticipant[];
  onCreatePress: (id: string) => void;
  onRemovePress: (id: string) => void;
};

export const Participants = (props: ParticipantsProps) => {
  const { participants, onCreatePress, onRemovePress } = props;
  const { theme } = useTheme();

  const empty = (
    <View style={styles.emptyContainer}>
      <ContactSvg />
    </View>
  );

  return (
    <ScrollView>
      <ListView containerStyle={styles.bodyContainer}>
        {participants.length === 0 && empty}

        {participants.map((participant) => (
          <ListItem key={participant.id}>
            <ListItem.Content>
              <ListItem.Title>{participant.name}</ListItem.Title>
              <ListItem.Subtitle>
                ${participant.total.toFixed(2)}
              </ListItem.Subtitle>
            </ListItem.Content>
            <Icon
              name="receipt-outline"
              type="ionicon"
              color={theme.colors.primary}
              onPress={() => onCreatePress(participant.id)}
            />
            <Icon
              name="trash-outline"
              type="ionicon"
              color={theme.colors.error}
              onPress={() => onRemovePress(participant.id)}
            />
          </ListItem>
        ))}
      </ListView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  bodyContainer: { margin: 12, minHeight: ScreenHeight / 3 },
  emptyContainer: { margin: 12 },
});
