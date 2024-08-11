import { styled, TableRow } from "@mui/material";

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  border: 0,
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.background.default,
  },
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.background.paper,
  },
  "&:last-child tr": {
    borderRadius: theme.shape.borderRadius,
  },
  "& td, th": {
    borderBottom: 0,
  },
}));
