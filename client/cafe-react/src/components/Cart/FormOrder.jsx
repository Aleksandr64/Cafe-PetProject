import React from "react";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue, resetCart } from "../../redux/slices/cartSlice";
import axios from "axios";
import { ColorButton } from "../Style/MUIStyle";
import { useNavigate } from "react-router-dom";

export default function FormOrder() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const createOrder = async () => {
    const url = "http://localhost:5179/api/Order/AddNewOrder";
    console.log(url);
    const responce = await axios.post(url, cart);
    console.log(responce);
    if (responce.status === 204) {
      dispatch(resetCart());
      navigate("/");
    } else {
      navigate("NotFound");
    }
  };

  const addFormOrder = (propertyName, event) => {
    dispatch(setInputValue({ propertyName, value: event.target.value }));
  };

  return (
    <>
      <Typography
        gutterBottom
        variant="h3"
        component="div"
        sx={{ padding: "10px", margin: "0px" }}
      >
        Form
      </Typography>
      <Box component="form" sx={{ width: "500px", padding: "10px" }}>
        <TextField
          id="customerName"
          fullWidth
          label="Ім'я"
          color="warning"
          onChange={(event) => addFormOrder("customerName", event)}
          value={cart.customerName}
        />
      </Box>
      <Box component="form" sx={{ width: "500px", padding: "10px" }}>
        <TextField
          id="phoneNumber"
          fullWidth
          label="Номер телефону"
          color="warning"
          onChange={(event) => addFormOrder("phoneNumber", event)}
          value={cart.phoneNumber}
        />
      </Box>
      <Box component="form" sx={{ width: "500px", padding: "10px" }}>
        <TextField
          id="address"
          fullWidth
          label="Адреса доставки"
          color="warning"
          onChange={(event) => addFormOrder("address", event)}
          value={cart.address}
        />
      </Box>
      <Box component="form" sx={{ width: "500px", padding: "10px" }}>
        <TextField
          id="emailAddress"
          label="Електорнна адреса"
          color="warning"
          fullWidth
          onChange={(event) => addFormOrder("emailAddress", event)}
          value={cart.emailAddress}
        />
      </Box>
      <Box sx={{ width: "500px", padding: "10px" }}>
        <Typography gutterBottom variant="h6" component="div">
          Сума замовлення: {cart.totalAmount.toFixed(2)} грн.
        </Typography>
      </Box>
      <Box onClick={createOrder} sx={{ padding: "10px" }}>
        <ColorButton variant="contained">Створити замовлення</ColorButton>
      </Box>
    </>
  );
}
