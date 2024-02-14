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

      {orderList.length === 0 ? (
        <Typography
          variant="h4"
          component="div"
          sx={{ padding: "10px", margin: "0px" }}
        >
          Cart Empty
        </Typography>
      ) : (
        <>
          {orderList.map((items) => (
            <DishOrder
              key={items.dishId}
              dishId={items.dishId}
              quantity={items.quantity}
            />
          ))}
        </>
      )}
    </>
  );
}
