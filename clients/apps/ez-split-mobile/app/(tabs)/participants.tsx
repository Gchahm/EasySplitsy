import { ScrollView } from "@/components/ScrollView";
import { ThemedSafeAreaView } from "@/components/ThemedSafeView";
import { Card, Icon, Input, ListItem } from "@rneui/themed";
import { useBill } from "ez-split-logic";
import * as React from "react";
import { StyleSheet } from "react-native";

export default function Participants() {
  const { selectedParticipant, participants, ...actions } = useBill();
  const [name, setName] = React.useState("");

  return (
    <ThemedSafeAreaView style={styles.container}>
      <Card containerStyle={styles.container}>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="add participant"
          onSubmitEditing={() => {
            actions.addPeople([{ name }]);
            setName("");
          }}
        />
        <ScrollView>
          {participants.map((participant) => (
            <ListItem key={participant.id}>
              <ListItem.Content>
                <ListItem.Title>{participant.name}</ListItem.Title>
              </ListItem.Content>
              <Icon name="trash-outline" type="ionicon" />
            </ListItem>
          ))}
        </ScrollView>
      </Card>
    </ThemedSafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
