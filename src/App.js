import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Footer, Navbar, Notifications } from "./Components";
import {
  About,
  Contact,
  Home,
  Login,
  ServicePage,
  ChangePassword,
  Payment,
  NotFound,
  ConfirmAccount,
  ChangeInformation,
  ServicesUser,
  ChartView,
} from "./Pages";
import { authState$ } from "./redux/selectors/index";
import { useSelector, useDispatch } from "react-redux";
import * as authActions from "./redux/actions/AuthActions";
import Register from "./Pages/Register/Register";
const App = () => {
  const dispatch = useDispatch();

  const user = useSelector(authState$).data;
  useEffect(() => {
    if (localStorage.getItem("authToken") !== null) {
      dispatch(authActions.getUserByToken.getUserByTokenRequest());
    }
  }, [dispatch]);
  return (
    <Router>
      <Navbar />
      <Notifications />
      <Switch>
        <Route exact path="/about-us">
          <About />
        </Route>
        <Route exact path="/our-services">
          <ServicePage />
        </Route>
        <Route exact path="/contact-us">
          <Contact />
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route exact path="/change-password">
          {user ? <ChangePassword /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/payment">
          <Payment />
        </Route>
        <Route exact path="/confirm/:token">
          <ConfirmAccount />
        </Route>
        <Route exact path="/change-information">
          {user ? <ChangeInformation /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/services">
          {user ? <ServicesUser /> : <Redirect to="/" />}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/chart/:id">
          {user ? <ChartView /> : <Redirect to="/" />}
        </Route>
        <Route path="/not-found">
          <NotFound />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
