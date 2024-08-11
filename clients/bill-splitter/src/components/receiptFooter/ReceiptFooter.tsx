import * as React from "react";
import { IReceiptFooterProps } from ".";
import { Card, IconButton, Stack } from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LeftIcon from "@mui/icons-material/ChevronLeft";
import RightIcon from "@mui/icons-material/ChevronRight";
import { ParticipantAvatar } from "../StyledMUI/ParticipantAvatar";

export const ReceiptFooter: React.FC<IReceiptFooterProps> = (props) => {
  const {
    selectedParticipant,
    selectedItem,
    billItems,
    onMoveToParticipantClick,
    onMoveToBillClick,
  } = props;
  return (
    <Card>
      <Stack
        direction="row"
        alignContent="center"
        justifyContent="center"
        spacing={2}
        padding={4}
      >
        {selectedItem && selectedParticipant && (
          <>
            <ReceiptIcon />
            <IconButton onClick={onMoveToBillClick}>
              {billItems[selectedItem.id]}
              <LeftIcon />
            </IconButton>
            {selectedItem.name}
            <IconButton onClick={onMoveToParticipantClick}>
              <RightIcon />
            </IconButton>
            <ParticipantAvatar {...selectedParticipant} />
            {selectedParticipant.items[selectedItem.id]}
          </>
        )}
      </Stack>
    </Card>
  );
};