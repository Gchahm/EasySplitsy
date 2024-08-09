import {styled, TableRow} from "@mui/material";

export const StyledTableHeaderRow = styled(TableRow)(({theme}) => ({
    backgroundColor: theme.palette.background.default,
    borderColor: theme.palette.background.default,
}));