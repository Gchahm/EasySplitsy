import { Avatar, styled } from "@mui/material";
import { IParticipant } from "ez-split-interfaces";

export const ParticipantAvatar = styled(Avatar, {
    name: "MuiSParticipantAvatar",
    slot: "root",
})<IParticipant>(({ color }) => ({
    width: 24,
    height: 24,
    backgroundColor: color,
}));
