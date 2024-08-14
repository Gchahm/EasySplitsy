import React from "react";
import { IPersonaProps } from ".";
import { Chip } from "@mui/material";
import { ParticipantAvatar } from "../StyledMUI/ParticipantAvatar";

export const Persona: React.FC<IPersonaProps> = (props) => {
  const { isActive, onClick, ...participantProps } = props;

  return (
    <Chip
      avatar={<ParticipantAvatar {...participantProps} />}
      label={participantProps.name}
      onClick={onClick}
      variant={isActive ? "filled" : "outlined"}
      color={isActive ? "primary" : "default"}
      onDelete={onClick}
    />
  );
};