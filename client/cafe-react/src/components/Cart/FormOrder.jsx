import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputValue, resetCart } from "../../redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";
import "../../Style/style.scss";
import styles from './FormOrder.module.scss'
import {useCreateOrderMutation} from "../../redux/API/cartApiSlice";

export default function FormOrder() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [createOrder] = useCreateOrderMutation();

  const submitOrder = async () => {
    try {
      await createOrder(cart).unwrap();
      dispatch(resetCart());
      navigate("/");
    } catch (err) {
      if (!err.response) {
        console.log("No Server Response");
      } else if (err.response.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Failed");
      }
    }
  }

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
        <div className="formField">
          <input
            type="text"
            id="customerName"
            className="input"
            onChange={(event) => addFormOrder("customerName", event)}
            value={cart.customerName}
            required/>
        </div>
        <label htmlFor="phoneNumber">Номер телефону</label>
        <div className="formField">
          <input
            type="text"
            id="phoneNumber"
            className="input"
            onChange={(event) => addFormOrder("phoneNumber", event)}
            value={cart.phoneNumber}
            required/>
        </div>
        <label htmlFor="emailAddress">Електронна Адресса</label>
        <div className="formField">
          <input
            type="text"
            id="emailAddress"
            className="input"
            onChange={(event) => addFormOrder("emailAddress", event)}
            value={cart.emailAddress}
            required/>
        </div>
        <label htmlFor="address">Адреса доставки</label>
        <div className="formField">
          <input
            type="text"
            id="address"
            className="input"
            onChange={(event) => addFormOrder("address", event)}
            value={cart.address}
            required/>
        </div>
      </form>
      <p>
        Сума замовлення: {cart.totalAmount.toFixed(2)} грн.
      </p>
      <div className={styles.boxWrapper}>
        <button className="colorButton" type="submit" onClick={submitOrder}>Створити замовлення</button>
      </div>
    </div>
  );
}
