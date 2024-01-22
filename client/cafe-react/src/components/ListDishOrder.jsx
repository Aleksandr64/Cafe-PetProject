import DishOrder from "./DishOrder";
import Typography from "@mui/material/Typography";
import React from "react";
import { useSelector } from "react-redux";

export default function ListDishOrder() {
  const orderList = useSelector((state) => state.cart.orderItems);
  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ padding: "10px", margin: "0px" }}
      >
        DishList
      </Typography>
      {orderList.map((items) => {
        return (
          <DishOrder
            key={items.dishId}
            dishId={items.dishId}
            quantity={items.quantity}
          />
        );
      })}
    </>
  );
}
