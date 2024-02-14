import { Button, styled } from "@mui/material";
import { orange } from "@mui/material/colors";

export const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(orange[500]),
  backgroundColor: orange[500],
  "&:hover": {
    backgroundColor: orange[600],
  },
}));
