import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentUser,
  selectCurrentAccessToken,
  logOut,
} from "../../redux/auth/authSlice";
import { Link, useNavigate } from "react-router-dom";
import { ColorButton } from "../Style/MUIStyle";
import Box from "@mui/material/Box";
import React from "react";
import { useLogoutMutation } from "../../redux/API/authApiSlice";

const Welcome = () => {
  const user = useSelector(selectCurrentUser);
  const accessToken = useSelector(selectCurrentAccessToken);
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const welcome = user ? `Welcome ${user}!` : "Welcome!";
  const tokenAbbr = `${accessToken.slice(0, 9)}...`;

  const useLogout = async () => {
    console.log("logout");
    try {
      await logout(accessToken).unwrap();
      dispatch(logOut());
    } catch (err) {
      if (!err.response) {
        console.log("No Server Response");
      } else if (err.response.status === 400) {
        console.log("Missing Username or Password");
      } else if (err.response?.status === 401) {
        console.log("Unauthorized");
      } else {
        console.log("Login Failed");
      }
    }
  };

  const content = (
    <section className="welcome">
      <h1>{welcome}</h1>
      <p>Token: {tokenAbbr}</p>
      <p>
        <Link to="/testList"> TestEndpoint </Link>
      </p>
      <Box sx={{ padding: "10px" }}>
        <ColorButton variant="contained" type="submit">
          <Box
            sx={{
              width: "468px",
              paddingTop: "5px",
              paddingBottom: "5px",
              color: "white",
            }}
            onClick={useLogout}
          >
            Sign in
          </Box>
        </ColorButton>
      </Box>
    </section>
  );

  return content;
};

export default Welcome;
