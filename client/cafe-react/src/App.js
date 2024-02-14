import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import { Container } from "@mui/material";
import React from "react";
import RequireAuth from "./components/Auth/RequireAuth";
import UserAccount from "./pages/UserAccount";
import TestReAuth from "./components/Auth/TestReAuth";
import Registration from "./components/Auth/Registration";
import Login from "./components/Auth/Login";

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ mt: "20px", mb: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route element={<RequireAuth />}>
            <Route path="/accountPage" element={<UserAccount />} />
            <Route path="/testList" element={<TestReAuth />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
