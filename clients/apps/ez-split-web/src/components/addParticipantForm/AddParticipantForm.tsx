import * as React from "react";
import { IAddParticipantFormProps } from ".";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, InputBase, Stack } from "@mui/material";
import { useTranslation } from "react-i18next";
import resources from "../../@types/resources.ts";

export const AddParticipantForm: React.FC<IAddParticipantFormProps> = (
  props,
) => {
  const { name, onNameChange, onAddParticipant } = props;

  const inputRef = React.useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

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
        placeholder={t(resources.translation.addParticipantPlaceholder)}
        value={name}
        onChange={handleParticipantChange}
      />
      <IconButton size={"small"} onClick={onAddParticipant}>
        <AddIcon />
      </IconButton>
    </Stack>
  );
};
