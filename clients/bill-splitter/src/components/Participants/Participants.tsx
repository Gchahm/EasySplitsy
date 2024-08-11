import * as React from "react";
import { Stack } from "@mui/material";
import { IParticipantsProps } from "./IParticipantsProps";
import { Persona } from "../Persona";
import Container from "@mui/material/Container";

const containerStyle: React.CSSProperties = {
  overflow: "scroll",
  padding: 2,
};

export const Participants: React.FC<IParticipantsProps> = (props) => {
  const { participants, selectedParticipant, onParticipantChange } = props;

  return (
    <Container sx={containerStyle}>
      <Stack direction="row" spacing={2}>
        {participants.map((participant) => (
          <Persona
            key={participant.id}
            isActive={participant.id === selectedParticipant?.id}
            onClick={() => onParticipantChange(participant.id)}
            {...participant}
          />
        ))}
      </Stack>
    </Container>
  );
};
