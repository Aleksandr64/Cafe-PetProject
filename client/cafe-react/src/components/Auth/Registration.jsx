import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { orange } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, InputAdornment, TextField } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ColorButton } from "../Style/MUIStyle";
import { useRegistrationMutation } from "../../redux/API/authApiSlice";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");

  const navigate = useNavigate();
  const [registration, { isLoading }] = useRegistrationMutation();
  const test = useRegistrationMutation();
  console.log(test);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await registration({
        firstName,
        lastName,
        userName,
        password,
        email,
        phoneNumber,
      });
      setPassword("");
      navigate("/login");
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

  const handleFirstNameInput = (e) => setFirstName(e.target.value);
  const handleLastNameInput = (e) => setLastName(e.target.value);
  const handleUserNameInput = (e) => setUserName(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handlePhoneNumberInput = (e) => setPhoneNumber(e.target.value);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const content = (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "5%",
          }}
        >
          <Typography variant="h5" component="div" sx={{ mt: "10px" }}>
            Sign Up
          </Typography>
          <form onSubmit={handleSubmit}>
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                id="firstName"
                fullWidth
                label="First Name"
                color="warning"
                onChange={handleFirstNameInput}
                required
              />
            </Box>
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                id="lastName"
                fullWidth
                label="Last Name"
                color="warning"
                onChange={handleLastNameInput}
                required
              />
            </Box>
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                id="userName"
                fullWidth
                label="UserName"
                color="warning"
                onChange={handleUserNameInput}
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
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                id="email"
                fullWidth
                label="Email"
                color="warning"
                onChange={handleEmailInput}
                required
              />
            </Box>
            <Box sx={{ width: "500px", padding: "10px" }}>
              <TextField
                id="phoneNumber"
                fullWidth
                label="Phone Number"
                color="warning"
                onChange={handlePhoneNumberInput}
                required
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
                  Sign Up
                </Box>
              </ColorButton>
            </Box>
          </form>
        </Grid>
      )}
    </>
  );
  return content;
};

export default Registration;
