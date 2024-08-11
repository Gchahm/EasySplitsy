import * as React from 'react';
import { IAddParticipantFormProps } from '.';
import {Button, TextField} from "@mui/material";

export const AddParticipantForm: React.FC< IAddParticipantFormProps > = (props) => {

    const {name, onNameChange, onAddParticipant} = props;

    const handleParticipantChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (onNameChange) {
            onNameChange(event.target.value);
        }
    }

  return (
    <>
        <TextField value={name} onChange={handleParticipantChange}/>
        <Button variant="contained" onClick={onAddParticipant}>All</Button>
    </>
  );
};