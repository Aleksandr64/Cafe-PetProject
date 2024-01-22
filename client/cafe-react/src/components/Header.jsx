import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";
import { orange } from "@mui/material/colors";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";

function Header({ handleCart }) {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[800],
      },
    },
  });

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar theme={theme} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, ml: "20px", fontSize: "32px" }}
          >
            <Link to="/" style={{ color: "white", textDecoration: "none" }}>
              FastFood
            </Link>
          </Typography>
          <Link to="/accountPage">
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              sx={{ color: "white", ml: "auto", mr: "0" }}
            >
              <AccountCircle />
            </IconButton>
          </Link>
          <Link to="/order">
            <IconButton
              aria-label="shopping cart"
              size="large"
              sx={{ color: "white", ml: "auto", mr: "0" }}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
