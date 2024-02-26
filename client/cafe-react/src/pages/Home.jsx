import Dish from "../components/Home/Dish";
import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setAllDish} from "../redux/slices/dishSlice";
import styles from './Home.module.scss';
import {useGetAllDishMutation} from "../redux/API/dishApiSlice";

export default function Home() {
  const navigate = useNavigate();
  const dishes = useSelector((state) => state.dish.dishes);
  const dispatch = useDispatch();
  const [getAllDish, {isLoading}] = useGetAllDishMutation();

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const response = await getAllDish().unwrap();
        dispatch(setAllDish(response));
      } catch (err) {
        if (!err.status) {
          console.log("No Server Response");
          navigate("NotFound");
        } else if (err.status === 400) {
          console.log("Missing Username or Password");
          navigate("NotFound");
        } else if (err.status === 401) {
          console.log("Unauthorized");
          navigate("/login");
        } else {
          console.log("Login Failed");
          navigate("NotFound");
        }
      }
    }
    fetchData();
  }, []);

  return isLoading ? (<h1>Loading....</h1>) : (
    <div className={styles.gridContainer}>
      {dishes?.map((record) => (
        <Dish
          key={record.id}
          id={record.id}
          title={record.title}
          description={record.description}
          price={record.price}
          imageUrl={record.imageUrl}
        />
      ))}
    </div>
  );
}
