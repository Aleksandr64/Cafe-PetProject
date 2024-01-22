import { Grid } from "@mui/material";
import Dish from "../components/Dish";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllDish } from "../redux/slices/dishSlice";

export default function Home() {
  const navigate = useNavigate();
  const dishes = useSelector((state) => state.dish.dishes);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:5179/api/Dish/GetAllDish")
      .then((res) => dispatch(getAllDish(res.data)))
      .catch((err) => {
        navigate("NotFound");
      });
  }, []);

  return (
    <>
      <Grid container spacing={3}>
        {dishes.map((record) => (
          <Dish
            key={record.id}
            id={record.id}
            title={record.title}
            description={record.description}
            price={record.price}
            imageUrl={record.imageUrl}
          />
        ))}
      </Grid>
    </>
  );
}
