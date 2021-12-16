import React, { useState } from "react";
import { useStyles } from "./style";
import { Brand, Header, TeamMember } from "./../../Components";
import { Mail, Lock } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import * as authActions from "./../../redux/actions/AuthActions";
import { useDispatch, useSelector } from "react-redux";
import { authState$ } from "./../../redux/selectors/index";
const Login = () => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    emailError: false,
    passwordError: false,
  });
  const dispatch = useDispatch();
  const auth = useSelector(authState$);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleLogin = async (e) => {
    e.preventDefault();
    let emailCheck = false;
    let passwordCheck = false;
    let check = false;
    if (email === "") {
      emailCheck = true;
      check = true;
    }
    if (password === "") {
      passwordCheck = true;
      check = true;
    }
    setError({
      ...error,
      emailError: emailCheck,
      passwordError: passwordCheck,
    });
    if (check === true) {
      return;
    }
    const payload = {
      email,
      password,
    };
    setEmail("");
    setPassword("");
    dispatch(authActions.loginUser.loginUserRequest(payload));
  };
  return (
    <div>
      <Header type="login" />
      <div
        className={classes.loginBlock}
        style={{
          backgroundImage: `url(${PF}/images/bglogin.jpg)`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <div className={classes.loginForm}>
          <h2>Sign In</h2>
          <div>
            <div className={classes.IconBlock}>
              <Mail className={classes.Icon} />
            </div>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your Email"
            />
          </div>
          {error.emailError && (
            <span
              style={{
                marginTop: "-13px",
                marginBottom: "5px",
                color: "red",
                fontWeight: 700,
              }}
            >
              Email is empty !
            </span>
          )}
          <div>
            <div className={classes.IconBlock}>
              <Lock className={classes.Icon} />
            </div>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          {error.passwordError && (
            <span
              style={{
                marginTop: "-13px",
                marginBottom: "5px",
                color: "red",
                fontWeight: 700,
              }}
            >
              Password is empty !
            </span>
          )}
          {auth.isLoading ? (
            <Button type="button" variant="contained">
              <CircularProgress style={{ width: "25px", height: "25px" }} />
            </Button>
          ) : (
            <Button type="button" onClick={handleLogin} variant="contained">
              Login
            </Button>
          )}
          {auth.errorMsg !== "" && (
            <span style={{ marginTop: "5px", color: "red", fontWeight: 700 }}>
              {auth.errorMsg}
            </span>
          )}
        </div>
      </div>
      <Brand />
      <TeamMember />
    </div>
  );
};

export default Login;
