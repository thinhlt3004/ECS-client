import { Phone, Email, FmdGood } from "@mui/icons-material";
import React from "react";
import { useStyles } from "./style";
const ContactInformation = () => {
  const classes = useStyles();
  return (
    <div className={classes.locationInfo}>
      <div className={classes.contact}>
        <Phone className={classes.Icon} />
        <h3>Phone</h3>
        <p>090-080-0760</p>
      </div>
      <div className={classes.contact}>
        <Email className={classes.Icon} />
        <h3>Email</h3>
        <p>info@company.com</p>
      </div>
      <div className={classes.contact}>
        <FmdGood className={classes.Icon} />
        <h3>Location</h3>
        <p>1020 New Mountain Street Forest Park, FP 11220</p>
      </div>
    </div>
  );
};

export default ContactInformation;
