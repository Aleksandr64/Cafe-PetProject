import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { orange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { useSelector } from "react-redux";

export default function DishOrder({ dishId, quantity }) {
  const dish = useSelector((state) =>
    state.dish.dishes.find((item) => item.id === dishId),
  );
  return (
    <>
      <Card sx={{ marginTop: "15px", marginBottom: "15px", display: "flex" }}>
        <Box
          sx={{
            position: "relative",
            height: "200px",
            width: "100%",
            borderRadius: "30px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              height: "190px",
              width: "300px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <CardMedia
              component="img"
              width="150px"
              height="100%"
              image={dish.imageUrl}
              title={dish.title}
              style={{
                borderRadius: "10px",
              }}
            />
          </Box>
          <Box sx={{ marginLeft: "15px" }}>
            <Typography gutterBottom variant="h6" component="div">
              Назва: {dish.title}
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Ціна: {dish.price} грн.
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              Кількість: {quantity}
            </Typography>
          </Box>
          <Box sx={{ marginLeft: "auto", marginRight: "10px" }}>
            <IconButton
              aria-label="add to shopping cart"
              size="large"
              sx={{ color: orange[500] }}
            >
              <DeleteOutlineIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Card>
    </>
  );
}
