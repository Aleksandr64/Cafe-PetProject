import logo from "./logo.svg";
import "./App.css";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import Dish from "./components/Dish";

function App() {
  return (
    <>
      <Header />
      <Container sx={{ mt: "10px", mb: "10px" }}>
        <Grid container spacing={3}>
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
          <Dish />
        </Grid>
      </Container>
    </>
  );
}

export default App;
