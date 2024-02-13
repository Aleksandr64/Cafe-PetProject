import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Checkbox,
  FormControlLabel,
  InputAdornment,
  TextField,
} from "@mui/material";
import { orange } from "@mui/material/colors";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ColorButton } from "../Style/MUIStyle";
import Link from "@mui/material/Link";
import { useLoginMutation } from "../../redux/API/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/auth/authSlice";

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const userRef = React.useRef();
  const errRef = React.useRef();
  const [userName, setUser] = useState("");
  const [password, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [userName, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = await login({ userName, password }).unwrap();
      dispatch(setCredentials({ ...userData, userName }));
      setPwd("");
      navigate("/welcome");
    } catch (err) {
      if (!err.response) {
        setErrMsg("No Server Response");
      } else if (err.response.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.response?.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
      if (errRef.current) {
        errRef.current.focus();
      }
    }
  };

  const handleUserInput = (e) => setUser(e.target.value);

  const handlePwdInput = (e) => setPwd(e.target.value);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const content = (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <LockPersonIcon
            fontSize="large"
            size="large"
            sx={{ color: orange[500] }}
          />
          <Typography variant="h5" component="div" sx={{ mt: "10px" }}>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                id="userName"
                fullWidth
                label="UserName"
                color="warning"
                onChange={handleUserInput}
                required
              />
            </Box>
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                variant="outlined"
                color="warning"
                fullWidth
                onChange={handlePwdInput}
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
            <Typography variant="h5" component="div" sx={{ mt: "10px" }}>
              {errMsg}
            </Typography>
            <Box sx={{ width: "500px", ml: "10px" }}>
              <FormControlLabel
                control={<Checkbox color="warning" />}
                color="warning"
                label="Remember me"
              />
            </Box>
            <Box sx={{ padding: "10px" }}>
              <ColorButton variant="contained" type="submit">
                <Box
                  sx={{
                    width: "468px",
                    paddingTop: "5px",
                    paddingBottom: "5px",
                    color: "white",
                  }}
                >
                  Sign in
                </Box>
              </ColorButton>
            </Box>
            <Box
              sx={{
                width: "500px",
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "10px",
              }}
            >
              <Link href="#" underline="hover">
                Forgot password?
              </Link>
              <Link href="#" underline="hover">
                Don't have an account? Sign Up
              </Link>
            </Box>
          </form>
        </>
      )}
    </>
  );
  return content;
};

export default Login;
