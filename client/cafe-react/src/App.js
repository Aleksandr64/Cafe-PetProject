import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Container } from "@mui/material";
import React from "react";
import UserAccountPage from "./pages/UserAccountPage";
import RequireAuth from "./components/Auth/RequireAuth";
import Welcome from "./components/Auth/Welcom";
import TestReAuth from "./components/Auth/TestReAuth";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: "20px", mb: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/accountPage" element={<UserAccountPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/testList" element={<TestReAuth />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
