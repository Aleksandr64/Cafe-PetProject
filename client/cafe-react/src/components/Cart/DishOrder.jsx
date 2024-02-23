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
      <div className={styles.boxWrapper}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.dishImage}
            src={dish.imageUrl}
            alt={dish.title}
          />
        </div>
        <div className={styles.contentWrapper}>
          <p>
            {dish.title}
          </p>
          <p>
            Ціна: {dish.price} грн.
          </p>
          <p>
            Кількість: {quantity}
          </p>
        </div>
        <div className={styles.iconWrapper}>
          <button className="round-button">
            <FaTrashRestore  className="iconButton"/>
          </button>
        </div>
      </div>
    </div>
  );
}
