import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { Link, NavLink } from "react-router-dom";
import { Divider } from "@mui/material";
import { useSelector } from "react-redux";
import { authState$ } from "./../../redux/selectors/index";
import { useDispatch } from "react-redux";
import * as authActions from "./../../redux/actions/AuthActions";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const classes = useStyles({ isScrolled, open });
  const user = useSelector(authState$).data;
  const dispatch = useDispatch();
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset <= 300 ? false : true);
    return () => (window.onscroll = null);
  };
  useEffect(() => {
    if (!user) {
      setOpen(false);
    }
  }, [user]);
  const handleLogout = () => {
    dispatch(authActions.logOut.logOutRequest());
    setOpen(false);
  };
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h2>ECS</h2>
        </Link>
      </div>
      <div className={classes.right}>
        <NavLink
          exact
          to="/"
          className={classes.menu}
          activeClassName={classes.menuActive}
        >
          Home
        </NavLink>
        <NavLink
          to="/about-us"
          className={classes.menu}
          activeClassName={classes.menuActive}
        >
          About Us
        </NavLink>
        <NavLink
          to="/payment"
          className={classes.menu}
          activeClassName={classes.menuActive}
        >
          Payment
        </NavLink>
        <NavLink
          to="/our-services"
          className={classes.menu}
          activeClassName={classes.menuActive}
        >
          Our Services
        </NavLink>
        <NavLink
          to="/contact-us"
          className={classes.menu}
          activeClassName={classes.menuActive}
        >
          Contact Us
        </NavLink>
        {user ? (
          <span className={classes.Account} onClick={(e) => setOpen(!open)}>
            {user.fullName}
          </span>
        ) : (
          <>
            <NavLink
              to="/login"
              className={classes.menu}
              activeClassName={classes.menuActive}
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className={classes.menu}
              activeClassName={classes.menuActive}
            >
              Register
            </NavLink>
          </>
        )}
        <ul className={classes.menuUl}>
          <Link
            to="/services"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setOpen(false)}
          >
            <li className={classes.menuItem}>Services</li>
          </Link>
          <Divider />
          <Link
            to="/change-information"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setOpen(false)}
          >
            <li className={classes.menuItem}>Change Information</li>
          </Link>
          <Divider />
          <Link
            to="/change-password"
            style={{ textDecoration: "none", color: "inherit" }}
            onClick={() => setOpen(false)}
          >
            <li className={classes.menuItem}>Change Password</li>
          </Link>
          <Divider />
          <li className={classes.menuItem} onClick={handleLogout}>
            Log Out
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
