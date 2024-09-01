import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Icon, ListItem } from "@rneui/themed";
import { ScrollView } from "./ScrollView";
import { ListView } from "./ListView";
import { IParticipant } from "ez-split-interfaces";
import { ScreenHeight } from "@rneui/base";
import ContactSvg from "@/constants/svgs/contact";

type ParticipantsProps = {
  participants: IParticipant[];
  onRemovePress: (id: string) => void;
};

export const Participants = (props: ParticipantsProps) => {
  const { participants, onRemovePress } = props;

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
            </ListItem.Content>
            <Icon
              name="trash-outline"
              type="ionicon"
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
