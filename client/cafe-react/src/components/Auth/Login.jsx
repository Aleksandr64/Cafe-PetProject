import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUserLock } from "react-icons/fa6";
import { useLoginMutation } from "../../redux/API/authApiSlice";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../redux/slices/authSlice";
import {Link} from "react-router-dom";
import styles from "./Login.module.scss";
import {MdVisibility, MdVisibilityOff} from "react-icons/md";

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
      navigate("/accountPage");
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
        <div className={styles.gridContainer}>
          <FaUserLock className='iconButton' />
          <p className={styles.signUpTitle}>
            Sign IN
          </p>
          <form onSubmit={handleSubmit} className={styles.formContainer}>
            <div className={styles.formField}>
              <input
                className={styles.input}
                type="text"
                id="userName"
                placeholder="UserName"
                onChange={handleUserInput}
                required
              />
            </div>
            <div className={styles.formField}>
              <input
                className={styles.input}
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                onChange={handlePwdInput}
              />
              <button type="button" className="round-button" onClick={togglePasswordVisibility}>
                {showPassword ? <MdVisibility className="iconButton"/> : <MdVisibilityOff className="iconButton"/>}
              </button>
            </div>
            <div className={styles.buttonField}>
              <button type="submit" className="colorButton">
                Sign IN
              </button>
            </div>
          </form>
          <div className={styles.linkForm}>
            <Link to="#">
              Forgot password?
            </Link>
            <Link to="/registration" >
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </>
    )
    }
    </>
    )
  ;
  return content;
};

export default Login;
