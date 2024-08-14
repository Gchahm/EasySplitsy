import * as React from "react";
import { IAddParticipantFormProps } from ".";
import { Button, Stack, TextField } from "@mui/material";

export const AddParticipantForm: React.FC<IAddParticipantFormProps> = (
  props,
) => {
  const { name, onNameChange, onAddParticipant } = props;

  const handleParticipantChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    if (onNameChange) {
      onNameChange(event.target.value);
    }
  };

  return (
    <Stack
      direction="row"
      alignContent="center"
      justifyContent="center"
      spacing={2}
      padding={"12px"}
    >
      <TextField
        placeholder="participant name"
        value={name}
        onChange={handleParticipantChange}
      />
      <Button variant="contained" onClick={onAddParticipant}>
        add
      </Button>
    </Stack>
  );
};
