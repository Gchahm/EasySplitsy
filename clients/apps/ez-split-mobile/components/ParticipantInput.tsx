import { StyleSheet } from "react-native";
import { ThemedView } from "./ThemedView";
import { View } from "react-native";
import { Button, Icon, Input } from "@rneui/themed";

type ParticipantInputProps = {
  name: string;
  onNameChange: (value: string) => void;
  onAddClick: () => void;
};

export default function ParticipantInput(props: ParticipantInputProps) {
  const { name, onNameChange: setName, onAddClick } = props;

  return (
    <ThemedView style={styles.headerContainer}>
      <View>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="add participant"
          renderErrorMessage={false}
          onSubmitEditing={onAddClick}
        />
      </View>
      <Button>
        <Icon name="add" onPress={onAddClick} />
      </Button>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  headerContainer: { paddingVertical: 10, flexDirection: "row" },
});
