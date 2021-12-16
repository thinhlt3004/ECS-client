import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState } from "react";
import { Brand, Header, TeamMember } from "../../Components";
import { useStyles } from "./style";
import { userRegister } from "./../../Api/index";
import { useDispatch } from "react-redux";
import * as notifcationsActions from "./../../redux/actions/NotificationActions";
const Register = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    gender: "",
    email: "",
    phoneNumber: "",
    birthday: "",
    passwordHash: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    fullName: false,
    gender: false,
    email: false,
    phoneNumber: false,
    birthday: false,
    passwordHash: false,
    confirmPassword: false,
  });
  const classes = useStyles();
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const handleLogin = async () => {
    setIsLoading(true);
    let validate = false;
    let errorCheck = {
      fullName: false,
      gender: false,
      email: false,
      phoneNumber: false,
      birthday: false,
      passwordHash: false,
      confirmPassword: false,
    };
    const validEmail = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    const validPassword = new RegExp("^[a-zA-Z0-9._:$!%-]{6,}");
    const validPhone = new RegExp("^[0-9]{9,}");
    const validFullName = new RegExp("[a-zA-Z ]{3,}");
    if (!validFullName.test(formData.fullName)) {
      errorCheck.fullName = true;
      validate = true;
    }
    if (formData.gender === "") {
      errorCheck.gender = true;
      validate = true;
    }
    if (!validEmail.test(formData.email)) {
      errorCheck.email = true;
      validate = true;
    }
    if (!validPhone.test(formData.phoneNumber)) {
      errorCheck.phoneNumber = true;
      validate = true;
    }
    if (formData.birthday === "") {
      errorCheck.birthday = true;
      validate = true;
    }
    if (!validPassword.test(formData.passwordHash)) {
      errorCheck.passwordHash = true;
      validate = true;
    }

    if (formData.passwordHash !== formData.confirmPassword) {
      errorCheck.confirmPassword = true;
      validate = true;
    }
    setError(errorCheck);

    if (validate === true) {
      return;
    }
    try {
      const payload = {
        fullName: formData.fullName,
        gender: formData.gender === "true" ? true : false,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        birthday: formData.birthday,
        passwordHash: formData.passwordHash,
      };
      const res = await userRegister(payload);
      if (res.status === 200) {
        dispatch(
          notifcationsActions.openNotifications(
            "Register Successfully. Please check your email before login"
          )
        );
      }
      setIsLoading(false);
      setFormData({
        fullName: "",
        gender: "",
        email: "",
        phoneNumber: "",
        birthday: "",
        passwordHash: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.log(error.response.status);
    }
  };
  return (
    <div>
      <Header type="register" />
      <div
        className={classes.loginBlock}
        style={{
          backgroundImage: `url(${PF}/images/bglogin.jpg)`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <div className={classes.loginForm}>
          <h2>Register new Account</h2>
          <div className={classes.twoInput}>
            <div>
              <p>FullName</p>
              <input
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                name="fullName"
                type="text"
                placeholder="Enter your Full Name"
              />
              {error.fullName && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  FullName is required
                </div>
              )}
            </div>
            <div>
              <p>Gender</p>
              <select
                name="gender"
                value={formData.gender}
                onChange={(e) =>
                  setFormData({ ...formData, gender: e.target.value })
                }
              >
                <option value="">Gender</option>
                <option value={true}>Male</option>
                <option value={false}>Female</option>
              </select>
              {error.gender && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Gender is required
                </div>
              )}
            </div>
          </div>
          <div className={classes.twoInput}>
            <div>
              <p>Email</p>
              <input
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                name="email"
                type="text"
                placeholder="Enter your Email"
              />
              {error.email && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Email is required
                </div>
              )}
            </div>
            <div>
              <p>Phone Number</p>
              <input
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
                name="phoneNumber"
                type="text"
                placeholder="Enter your Phone Number"
              />
              {error.phoneNumber && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Phone Number is required
                </div>
              )}
            </div>
          </div>
          <div className={classes.OneInput}>
            <div>
              <p>Birthday</p>
              <TextField
                value={formData.birthday}
                onChange={(e) =>
                  setFormData({ ...formData, birthday: e.target.value })
                }
                name="birthday"
                className={classes.TextField}
                type="date"
              />
              {error.birthday && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Birthday is required
                </div>
              )}
            </div>
          </div>
          <div className={classes.twoInput}>
            <div>
              <p>Password</p>
              <input
                value={formData.passwordHash}
                onChange={(e) =>
                  setFormData({ ...formData, passwordHash: e.target.value })
                }
                name="passwordHash"
                type="password"
                placeholder="Enter your Password"
              />
              {error.passwordHash && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Password is required
                </div>
              )}
            </div>
            <div>
              <p>Confirm Password</p>
              <input
                value={formData.confirmPassword}
                onChange={(e) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
                type="password"
                placeholder="Enter your Confirm Password"
              />
              {error.confirmPassword && (
                <div
                  style={{
                    color: "red",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Password is not match
                </div>
              )}
            </div>
          </div>
          <div className={classes.btnBlock}>
            {isLoading ? (
              <Button type="button" variant="contained">
                <CircularProgress style={{ width: "25px", height: "25px" }} />
              </Button>
            ) : (
              <Button type="button" onClick={handleLogin} variant="contained">
                Register
              </Button>
            )}
          </div>
        </div>
      </div>
      <Brand />
      <TeamMember />
    </div>
  );
};

export default Register;
