import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { orange } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

export default function Dish(props) {
  const theme = createTheme({
    palette: {
      primary: {
        main: orange[800],
      },
    },
  });
  return (
    <Grid item xs={4}>
      <Card
        sx={{ borderRadius: "50px", paddingLeft: "10px", paddingRight: "10px" }}
      >
        <Box
          sx={{
            position: "relative",
            height: "300px", // Фіксована висота
            width: "100%", // Завжди 100% ширини
            borderRadius: "50px",
            overflow: "hidden", // Обрізає зайвий контент
            display: "flex",
            alignItems: "center", // Центрує по вертикалі
          }}
        >
          <CardMedia
            component="img"
            width="100%" // Заповнює всю ширину Box
            image={props.imageUrl}
            title={props.title}
            style={{
              objectFit: "cover", // Зберігає співвідношення сторін з обрізкою
              objectPosition: "center", // Центрує зображення горизонтально
              borderRadius: "30px",
            }}
          />
        </Box>
        <CardContent sx={{ paddingBottom: 0 }}>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {props.price.toFixed(2)} грн.
          </Typography>
        </CardContent>
        <CardActions
          sx={{ paddingTop: 0, paddingBottom: "10px", paddingRight: "20px" }}
        >
          <IconButton
            aria-label="add to shopping cart"
            size="large"
            sx={{ color: orange[500], ml: "auto", mr: "0" }}
          >
            <AddShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
