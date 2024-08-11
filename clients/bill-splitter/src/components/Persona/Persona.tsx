import Avatar from "@mui/material/Avatar";
import React from "react";
import {IPersonaProps} from ".";
import {PersonaName, PersonaRoot, PersonaSubText, PersonaTextContainer} from "./PersonaRoot";

export const Persona = React.forwardRef<HTMLDivElement, IPersonaProps>(function Persona(props, ref) {
    const {name, subText, onClick} = props;

    return (
        <PersonaRoot ref={ref} ownerState={props} onClick={onClick}>
            <Avatar alt={name}>{name[0]}</Avatar>
            <PersonaTextContainer>
                <PersonaName>
                    {name}
                </PersonaName>
                <PersonaSubText>
                    {subText}
                </PersonaSubText>
            </PersonaTextContainer>
        </PersonaRoot>
    );
});
