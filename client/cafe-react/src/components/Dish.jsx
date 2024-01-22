import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { orange } from "@mui/material/colors";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { addDish } from "../redux/slices/cartSlice";

export default function Dish(props) {
  const countDishOrder = useSelector((state) =>
    state.cart.orderItems.find((item) => item.dishId == props.id),
  );
  const dispatch = useDispatch();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card
        sx={{
          borderRadius: "20px",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "10px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "300px", // Фіксована висота
            width: "100%", // Завжди 100% ширини
            borderRadius: "10px",
            overflow: "hidden", // Обрізає зайвий контент
            display: "flex",
            alignItems: "center", // Центрує по вертикалі
          }}
        >
          <CardMedia
            component="img"
            width="100%"
            image={props.imageUrl}
            title={props.title}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            padding: "10px",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ margin: 0 }}
            >
              {props.title}
            </Typography>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ margin: 0 }}
            >
              {props.price.toFixed(2)} грн.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center", // Відцентровує елементи відносно іконки
              marginLeft: "auto",
            }}
          >
            <IconButton
              aria-label="add to shopping cart"
              size="large"
              sx={{ color: orange[500], ml: "auto", mr: "0" }}
              onClick={() =>
                dispatch(addDish({ dishId: props.id, price: props.price }))
              }
            >
              <AddShoppingCartIcon />
            </IconButton>
            <Box
              sx={{
                marginLeft: "7px",
                marginRight: "15px",
                display: "flex", // Додаємо display: "flex" для відцентрованого відображення кількості товару
                alignItems: "center", // Відцентровує кількість товару відносно іконки
              }}
            >
              <Typography
                component="div"
                variant="h5"
                sx={{
                  color: orange[500],
                }}
              >
                {countDishOrder ? countDishOrder.quantity : 0}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Card>
    </Grid>
  );
}
