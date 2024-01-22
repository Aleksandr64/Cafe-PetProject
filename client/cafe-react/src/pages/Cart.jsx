import { Container, Grid } from "@mui/material";
import { Form } from "react-router-dom";
import FormOrder from "../components/FormOrder";
import ListDishOrder from "../components/ListDishOrder";

export default function Cart() {
  return (
    <>
      <Grid container sx={{ padding: "10px" }}>
        <Grid item xs={6}>
          <FormOrder />
        </Grid>
        <Grid item xs={6}>
          <ListDishOrder />
        </Grid>
      </Grid>
    </>
  );
}
