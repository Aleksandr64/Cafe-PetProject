import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {logOut, selectCurrentAccessToken, selectCurrentUser,} from "../redux/auth/authSlice";
import {Link} from "react-router-dom";
import {useLogoutMutation} from "../redux/API/authApiSlice";
import '../Style/style.scss';
import styles from "./UserAccount.module.scss"

const UserAccount = () => {
  const user = useSelector(selectCurrentUser);
  const accessToken = useSelector(selectCurrentAccessToken);
  const [logout] = useLogoutMutation();
  const dispatch = useDispatch();

  const welcome = user ? `Welcome ${user}!` : "Welcome!";

  const useLogout = async () => {
    console.log("logout");
    try {
      await logout(accessToken);
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

  return (
    <section>
      <h1>{welcome}</h1>
      <p>
        <Link to="/testList"> TestEndpoint </Link>
      </p>
      <div className={styles.boxWrapper}>
        <button className="colorButton" type="submit" onClick={useLogout}>Log Out</button>
      </div>
    </section>
  );
};

export default UserAccount;
