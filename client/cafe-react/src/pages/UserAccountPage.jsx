import Login from "../components/Auth/Login";
import { Grid } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import RequireAuth from "../components/Auth/RequireAuth";
import Welcome from "../components/Auth/Welcom";

export default function UserAccountPage(props) {
  return (
    <>
      <Grid
        container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "5%",
        }}
      >
        <Login />
      </Grid>
    </>
  );
}
