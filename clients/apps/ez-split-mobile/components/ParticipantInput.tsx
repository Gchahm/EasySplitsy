import { Input } from "@rneui/themed";

type ParticipantInputProps = {
  name: string;
  onNameChange: (value: string) => void;
  onAddClick: () => void;
};

export default function ParticipantInput(props: ParticipantInputProps) {
  const { name, onNameChange: setName, onAddClick } = props;

  return (
    <Input
      value={name}
      onChangeText={setName}
      placeholder="add participant"
      renderErrorMessage={false}
      onSubmitEditing={onAddClick}
    />
  );
}
