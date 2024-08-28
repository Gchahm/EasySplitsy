import { ScrollView } from "@/components/ScrollView";
import { Button, Input, ListItem, Text } from "@rneui/base";
import { useBill } from "ez-split-logic";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Participants() {
  const { selectedParticipant, participants, ...actions } = useBill();
  const [name, setName] = React.useState("");

  return (
    <SafeAreaView>
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
          <ListItem.Swipeable
            key={participant.id}
            rightContent={(reset) => (
              <Button
                title={"remove"}
                onPress={() => reset()}
                icon={{ name: "info", color: "white" }}
                buttonStyle={{ minHeight: "100%" }}
              >
                test
              </Button>
            )}
          >
            <ListItem.Content>
              <ListItem.Title>{participant.name}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem.Swipeable>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
