import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue, resetCart } from "../../redux/slices/cartSlice";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../../Style/style.scss";
import styles from './FormOrder.module.scss'

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
    <div className={styles.formOrder}>
      <h2>
        Form
      </h2>
      <form>
        <label htmlFor="customerName">Ім'я</label>
        <input
          type="text"
          id="customerName"
          onChange={(event) => addFormOrder("customerName", event)}
          value={cart.customerName}
          required/>
        <label htmlFor="phoneNumber">Номер телефону</label>
        <input
          type="text"
          id="phoneNumber"
          onChange={(event) => addFormOrder("phoneNumber", event)}
          value={cart.phoneNumber}/>
        <label htmlFor="emailAddress">Електронна Адресса</label>
        <input
          type="text"
          id="emailAddress"
          onChange={(event) => addFormOrder("emailAddress", event)}
          value={cart.emailAddress}/>
        <label htmlFor="address">Адреса доставки</label>
        <input
          type="text"
          id="address"
          onChange={(event) => addFormOrder("address", event)}
          value={cart.address}/>
      </form>
      <div className={styles.boxWrapper}>
        <button className="colorButton" type="submit" onClick={createOrder}>Створити замовлення</button>
      </div>
    </div>
  );
}
