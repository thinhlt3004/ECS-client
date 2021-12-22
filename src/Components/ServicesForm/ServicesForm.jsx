import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import { useSelector, useDispatch } from "react-redux";
import { authState$ } from "../../redux/selectors/index";
import { PayPalButton } from "react-paypal-button-v2";
import { Circle } from "../index";
import * as API from "../../Api/index";
import * as notificationsActions from "../../redux/actions/NotificationActions";
import {
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  TextField,
} from "@mui/material";
import { useHistory } from "react-router-dom";
const ServicesForm = () => {
  const { data: user } = useSelector(authState$);
  const [cates, setCates] = useState([]);
  const history = useHistory();
  const [services, setServices] = useState([]);
  const [chooseCate, setChooseCate] = useState("");
  const [chooseService, setChooseService] = useState(null);
  const [serviceValue, setServiceValue] = useState("");
  const [getDays, setGetDays] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
  });
  const dispatch = useDispatch();
  //Paypal config
  const [sdkReady, setSdkReady] = useState(false);
  const paypalClientId = process.env.REACT_APP_PAYPAL_CLIENT_ID;
  const [chooseDate, setChooseDate] = useState({
    startDate: "",
    endDate: "",
  });
  const classes = useStyles();
  useEffect(() => {
    const fetchServiceCate = async () => {
      const res = await API.getServiceCate();
      if (res.status === 200) {
        setCates(res.data);
      }
    };
    fetchServiceCate();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      if (chooseCate !== "") {
        const res = await API.getServiceByCateId(chooseCate);
        if (res.status === 200) {
          setServices(res.data);
        }
      }
    };
    fetchServices();
  }, [chooseCate]);
  const dates = (d1, d2) => {
    let date1 = new Date(d1);
    let date2 = new Date(d2);
    let dif = date2.getTime() - date1.getTime();
    let days = dif / (1000 * 3600 * 24);
    return days;
  };
  useEffect(() => {
    if (chooseDate.startDate !== "" && chooseDate.endDate !== "") {
      let days = dates(chooseDate.startDate, chooseDate.endDate);
      setGetDays(days);
    }
  }, [chooseDate]);

  const handleChooseService = (e) => {
    setChooseService(services.find((i) => i.id === e.target.value));
    setServiceValue(e.target.value);
  };

  useEffect(() => {
    const addPayPalScript = async () => {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${paypalClientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (sdkReady === false) {
      addPayPalScript();
    }
  }, [paypalClientId, sdkReady]);

  const successPaymentHandler = async (paymentResult) => {
    if (paymentResult.status === "COMPLETED") {
      const payload = {
        customerId: user.id,
        serviceId: chooseService.id,
        startDate: chooseDate.startDate,
        currentPrice:
          getDays * chooseService.price + getDays * chooseService.price * 0.1,
        endDate: chooseDate.endDate,
        product: product.name,
        productPrice: parseInt(product.price),
      };
      const res = await API.createServiceByCustomer(payload);
      if (res.status === 200) {
        dispatch(
          notificationsActions.openNotifications(
            "Your payment of new service is successfully !"
          )
        );

        setChooseDate({
          startDate: "",
          endDate: "",
        });
        setServiceValue("");
        setChooseCate("");
        setChooseService(null);
        setGetDays(null);
        history.push("/services");
      }
    }
  };
  const handleValidate = () => {
    dispatch(
      notificationsActions.openNotifications("Some fields is not valid !")
    );
  };
  return (
    <div className={classes.container}>
      <h2>
        Services <span>Payment</span>
      </h2>
      <Circle direction="top" />
      <Circle direction="bottom" />
      <div className={classes.payment}>
        <div className={classes.paymentForm}>
          <h3>Information :</h3>
          <div>
            Name: <b>Mr/Mrs {user.fullName}</b>
          </div>
          <div>
            Email: <b>{user.email}</b>
          </div>
          <div>
            Phone Number: <b>{user.phoneNumber}</b>
          </div>
          <div className={classes.serviceDiv}>
            <div>
              <h3>Services Category: </h3>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Service Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select"
                  value={chooseCate ? chooseCate : ""}
                  label="Service Category"
                  onChange={(e) => setChooseCate(e.target.value)}
                  style={{ width: "300px" }}
                >
                  <MenuItem value="">--Choose---</MenuItem>
                  {cates.length > 0 &&
                    cates.map((i, index) => (
                      <MenuItem value={i.id} key={index}>
                        {i.caterogoryName}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
            <div>
              <h3>Service: </h3>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Service</InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select"
                  label="Service"
                  value={serviceValue ? serviceValue : ""}
                  style={{ width: "300px" }}
                  onChange={handleChooseService}
                >
                  <MenuItem value="">--Choose---</MenuItem>
                  {services.length > 0 &&
                    services.map((i, index) => (
                      <MenuItem value={i.id} key={index}>
                        {i.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            </div>
          </div>
          <div className={classes.serviceDiv}>
            <div>
              <h3>Start Date :</h3>
              <TextField
                value={chooseDate.startDate ? chooseDate.startDate : ""}
                onChange={(e) =>
                  setChooseDate({ ...chooseDate, startDate: e.target.value })
                }
                name="startDate"
                className={classes.TextField}
                type="date"
              />
            </div>
            <div>
              <h3>End Date :</h3>
              <TextField
                value={chooseDate.endDate ? chooseDate.endDate : ""}
                onChange={(e) =>
                  setChooseDate({ ...chooseDate, endDate: e.target.value })
                }
                name="endDate"
                className={classes.TextField}
                type="date"
              />
            </div>
          </div>
          <div className={classes.serviceDiv}>
            <div>
              <h3>Your Product Name :</h3>
              <TextField
                className={classes.inputProduct}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
                type="text"
                placeholder="Enter your product name"
              />
            </div>
            <div>
              <h3>Your Product Price :</h3>
              <TextField
                className={classes.inputProduct}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
                type="number"
                placeholder="Enter your price of products"
              />
            </div>
          </div>
        </div>
        <div className={classes.paypal}>
          <div className={classes.bill}>
            <h3>Order Summary:</h3>
            <div className={classes.billItem}>
              <span>Price per one day: </span>
              <span>{chooseService ? "$ " + chooseService.price : "---"}</span>
            </div>
            <div className={classes.billItem}>
              <span>Total Days: </span>
              <span>{getDays !== null ? getDays : "---"}</span>
            </div>
            <div className={classes.billItem}>
              <span>Subtotal: </span>
              <span>
                {chooseService && getDays
                  ? "$ " + getDays * chooseService.price
                  : "---"}
              </span>
            </div>
            <div className={classes.billItem}>
              <span>Service Charge (10%): </span>
              <span>
                {chooseService && getDays
                  ? "$ " + getDays * chooseService.price * 0.1
                  : "---"}
              </span>
            </div>
            <div className={classes.billTotal}>
              <span>Total: </span>
              <span>
                {chooseService && getDays
                  ? "$ " +
                    (getDays * chooseService.price +
                      getDays * chooseService.price * 0.1)
                  : "---"}
              </span>
            </div>
          </div>
          {chooseService === null ||
          getDays === null ||
          getDays <= 0 ||
          product.name === "" ||
          product.price === "" ? (
            <div>{sdkReady && <PayPalButton onClick={handleValidate} />}</div>
          ) : (
            sdkReady && (
              <PayPalButton amount={getDays * chooseService.price + getDays * chooseService.price * 0.1} onSuccess={successPaymentHandler} />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesForm;
