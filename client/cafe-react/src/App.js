import "./App.css";
import DishMenu from "./components/DishMenu";
import { Container, Grid } from "@mui/material";
import Header from "./components/Header";
import Dish from "./components/Dish";
import React, { useEffect, useState } from "react";

function App() {
  const [isMenuOpen, setMenuOpen] = React.useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5179/GetAllDish")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .catch((err) => console.log(err));
  }, []);

  console.log(records);

  return (
    <>
      <Header handleCart={() => setMenuOpen(true)} />
      <DishMenu menuOpen={isMenuOpen} closeMenu={() => setMenuOpen(false)} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "25px",
        }}
      >
        <Container
          sx={{
            mr: "5%",
            ml: "5%",
          }}
        >
          <Grid container spacing={3}>
            {records.map((record) => (
              <Dish
                key={record.DishId} // Make sure to provide a unique key for each item in the array
                title={record.title}
                description={record.description}
                price={record.price}
                imageUrl={record.imageUrl}
              />
            ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default App;
