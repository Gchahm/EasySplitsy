import * as React from "react";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import { IParticipantReceiptHeaderProps } from ".";
import { AddParticipantForm } from "../addParticipantForm";
import { IconButton, Stack } from "@mui/material";

export const ParticipantReceiptHeader: React.FC<
  IParticipantReceiptHeaderProps
> = (props) => {
  const {
    selectedParticipant,
    participantName,
    isRightButtonDisabled,
    isLeftButtonDisabled,
    setParticipantName,
    onAddParticipant,
    onLeftClick,
    onRightClick,
  } = props;

  return (
    <>
      <Stack direction="row">
        <IconButton
          size="small"
          onClick={onLeftClick}
          disabled={isLeftButtonDisabled}
        >
          <LeftIcon />
        </IconButton>
        <Stack flexGrow="1">
          {selectedParticipant ? (
            selectedParticipant.name
          ) : (
            <AddParticipantForm
              name={participantName}
              onNameChange={setParticipantName}
              onAddParticipant={onAddParticipant}
            />
          )}
        </Stack>
        <IconButton
          size="small"
          disabled={isRightButtonDisabled}
          onClick={onRightClick}
        >
          <RightIcon />
        </IconButton>
      </Stack>
    </>
  );
};
