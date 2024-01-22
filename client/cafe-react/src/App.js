import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Container } from "@mui/material";
import React from "react";
import UserAccountPage from "./pages/UserAccountPage";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: "20px", mb: "20px" }}>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/accountPage" element={<UserAccountPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
