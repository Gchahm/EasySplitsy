import Avatar from "@mui/material/Avatar";
import React from "react";
import {Paper, Stack} from "@mui/material";
import Typography from "@mui/material/Typography";

interface IPersonaProps {
    name: string;
    isActive?: boolean;
    onClick?: () => void;
}

const containerStyle: React.CSSProperties = {
    padding: 2,
}
export const Persona: React.FC<IPersonaProps> = (props) => {

    const {name, isActive, onClick} = props;

    return (
        <Paper sx={{...containerStyle, backgroundColor: isActive ? 'white' : 'black'}} onClick={onClick}>
            <Stack direction="row" spacing={2} alignContent="center">
                <Avatar alt={name}>{name[0]}</Avatar>
                <Typography>
                    {name}
                </Typography>
            </Stack>
        </Paper>
    );
}
