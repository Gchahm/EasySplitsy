import * as React from "react";
import { StyleSheet } from "react-native";
import { Icon, ListItem } from "@rneui/themed";
import { ScrollView } from "./ScrollView";
import { ListView } from "./ListView";
import { IParticipant } from "ez-split-interfaces";

type ParticipantsProps = {
  participants: IParticipant[];
  onRemovePress: (id: string) => void;
};

export const Participants = (props: ParticipantsProps) => {
  const { participants, onRemovePress } = props;

  return (
    <ScrollView>
      <ListView containerStyle={styles.bodyContainer}>
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
  bodyContainer: { margin: 10 },
});
