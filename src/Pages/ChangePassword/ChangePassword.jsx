import React, { useState } from "react";
import { useStyles } from "./style";
import { Header, TeamMember, Brand } from "./../../Components";
import { Button, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { authState$ } from "./../../redux/selectors/index";
import bcrypt from "bcryptjs";
import * as authActions from "./../../redux/actions/AuthActions";
const ChangePassword = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(authState$);
  const user = useSelector(authState$).data;
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });
  const [error, setError] = useState({
    errorCurrent: false,
    newPassword: false,
    confirmPassword: false,
  });
  const handleUpdate = () => {
    console.log(formData.currentPassword);
    let validate = false;
    const errorCheck = {
      errorCurrent: false,
      newPassword: false,
      confirmPassword: false,
    };
    const validPassword = new RegExp("^[a-zA-Z0-9._:$!%-]{6,}");
    if (
      bcrypt.compareSync(formData.currentPassword, user.passwordHash) === false
    ) {
      errorCheck.errorCurrent = true;
      validate = true;
    }
    if (!validPassword.test(formData.newPassword)) {
      errorCheck.newPassword = true;
      validate = true;
    }
    if (formData.newPassword !== formData.confirmPassword) {
      errorCheck.confirmPassword = true;
      validate = true;
    }
    setError(errorCheck);
    if (validate === true) {
      return;
    }
    const payload = {
      id: user.id,
      password: formData.newPassword,
    };

    dispatch(authActions.updatePassword.updatePasswordRequest(payload));
    setFormData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };
  return (
    <div>
      <Header type="change-password" />
      <div
        className={classes.ChangePasswordBlock}
        style={{
          backgroundImage: `url(${PF}/images/bglogin.jpg)`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
        }}
      >
        <div className={classes.ChangePasswordForm}>
          <span>Current Passord: </span>
          <input
            value={formData.currentPassword}
            onChange={(e) =>
              setFormData({ ...formData, currentPassword: e.target.value })
            }
            type="password"
            placeholder="Enter your password"
          />
          {error.errorCurrent && (
            <div
              style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
            >
              Current Password is not valid.
            </div>
          )}
          <span>New Password: </span>
          <input
            value={formData.newPassword}
            onChange={(e) =>
              setFormData({ ...formData, newPassword: e.target.value })
            }
            type="password"
            placeholder="Enter new password"
          />
          {error.newPassword && (
            <div
              style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
            >
              New Password is not valid.
            </div>
          )}
          <span>Confirm Password: </span>
          <input
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            type="password"
            placeholder="Confirm Password"
          />
          {error.confirmPassword && (
            <div
              style={{ color: "red", fontWeight: "bold", textAlign: "center" }}
            >
              Confirm Password is not match.
            </div>
          )}
          <div className={classes.btnBlock}>
            {isLoading ? (
              <Button type="button" variant="contained">
                <CircularProgress style={{ width: "25px", height: "25px" }} />
              </Button>
            ) : (
              <Button type="button" variant="contained" onClick={handleUpdate}>
                Update
              </Button>
            )}
          </div>
        </div>
      </div>
      <TeamMember />
      <Brand />
    </div>
  );
};

export default ChangePassword;
