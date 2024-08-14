import * as React from "react";
import { IAddParticipantFormProps } from ".";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, InputBase, Stack } from "@mui/material";

export const AddParticipantForm: React.FC<IAddParticipantFormProps> = (
  props,
) => {
  const { name, onNameChange, onAddParticipant } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleParticipantChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (onNameChange) {
      onNameChange(event.target.value);
    }
  };

  React.useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <Stack
      direction="row"
      alignContent="center"
      justifyContent="center"
      spacing={2}
    >
      <InputBase
        inputRef={inputRef}
        size={"small"}
        placeholder="participant name"
        value={name}
        onChange={handleParticipantChange}
      />
      <IconButton size={"small"} onClick={onAddParticipant}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
