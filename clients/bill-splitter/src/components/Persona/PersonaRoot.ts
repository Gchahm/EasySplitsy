import {styled} from "@mui/material";
import {IPersonaProps} from "./IPersonaProps";

export const PersonaRoot = styled('div', {
    name: 'Persona',
    slot: 'root',
})<{ ownerState: IPersonaProps }>(({theme, ownerState}) => ({
    ...theme.typography.body1,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    "padding": '16px 42px 16px 16px',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    color: ownerState.isActive ? theme.palette.background.paper : theme.palette.text.primary,
    backgroundColor: ownerState.isActive ? theme.palette.text.primary : theme.palette.background.paper,
}));