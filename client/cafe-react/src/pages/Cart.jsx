import { Container, Grid } from "@mui/material";
import FormOrder from "../components/Cart/FormOrder";
import ListDishOrder from "../components/Cart/ListDishOrder";

export default function Cart() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
          <FormOrder />
        </Grid>
        <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
          <ListDishOrder />
        </Grid>
      </Grid>
    </Container>
  );
}
