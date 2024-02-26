import * as React from "react";
import { useSelector } from "react-redux";
import '../../Style/style.scss';
import styles from "./DishOrder.module.scss";
import { FaTrashRestore } from "react-icons/fa";

export default function DishOrder({ dishId, quantity }) {
  const dish = useSelector((state) =>
    state.dish.dishes.find((item) => item.id === dishId),
  );
  return (
    <div className={styles.myCard}>
      <div className={styles.imageContainer}>
        <img
          className={styles.dishImage}
          src={dish.imageUrl}
          alt={dish.title}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.detailsContainer}>
          <p>{dish.title}</p>
          <p>Ціна: {dish.price} грн.</p>
          <p>Кількість: {quantity}</p>
        </div>
        <div className={styles.buttonContainer}>
          <button className="roundButton">
            <FaTrashRestore className="iconButton"/>
          </button>
        </div>
      </div>
    </div>
  );
}
