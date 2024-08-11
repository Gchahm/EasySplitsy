import {styled} from "@mui/material";
import {IPersonaProps} from "./IPersonaProps";

export const PersonaRoot = styled('div', {
    name: 'MuiSPersona',
    slot: 'root',
})<{ ownerState: IPersonaProps }>(({theme, ownerState}) => ({
    ...theme.typography.body1,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
    "padding": '16px 42px 16px 16px',
    borderRadius: theme.shape.borderRadius,
    textAlign: 'center',
    backgroundColor: ownerState.isActive ? theme.palette.primary.dark : theme.palette.background.paper,
}));

export const PersonaTextContainer = styled('div', {
    name: 'MuiSPersonaTextContainer',
    slot: 'textContainer',
})({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
});

export const PersonaName = styled('div', {
    name: 'MuiSPersonaName',
    slot: 'name',
})(({ theme }) => ({
    ...theme.typography.body1,
}));

export const PersonaSubText = styled('div', {
    name: 'MuiSPersonaCaption',
    slot: 'caption',
})(({ theme }) => ({
    ...theme.typography.caption,
}));
