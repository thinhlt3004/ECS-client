import React, { useEffect, useState } from "react";
import {
  Header,
  ContactInformation,
  Brand,
  ServiceItem,
  Circle,
} from "./../../Components/index";
import * as API from "./../../Api/index";
import { authState$ } from "../../redux/selectors";
import { useSelector } from "react-redux";
import { useStyles } from "./style";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
const ServicesUser = () => {
  const { data: user } = useSelector(authState$);
  const classes = useStyles();
  const [services, setServices] = useState([]);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await API.getAllServicesOfCustomer(user.id);
        if (res.status === 200) {
          setServices(res.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchServices();
  }, [user]);
  return (
    <div>
      <Header type="service-user" />
      <div
        className={classes.serviceContainer}
        style={{
          backgroundImage: `url(${PF}/images/bglogin.jpg)`,
          backgroundSize: "cover",
          backgroundRepeat: "none",
        }}
      >
        <h2 className={classes.title}>Services</h2>
        <div className={classes.serviceList}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead className={classes.tableHeader}>
                <TableRow>
                  <TableCell className={classes.tbHeader} align="center">
                    Services Informations
                  </TableCell>
                  <TableCell className={classes.tbHeader} align="center">
                    Product Informations
                  </TableCell>
                  <TableCell className={classes.tbHeader} align="center">
                    Payment Status
                  </TableCell>
                  <TableCell className={classes.tbHeader} align="center">
                    Employee
                  </TableCell>
                  <TableCell className={classes.tbHeader} align="left">
                    View Details
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {services.length > 0 ? (
                  services.map((i, index) => (
                    <TableRow key={index}>
                      <ServiceItem service={i} />
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <div className={classes.msg}>
                        You don't have any services...
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Circle direction="top" />
        <Circle direction="bottom" />
      </div>
      <Brand />
      <ContactInformation />
    </div>
  );
};

export default ServicesUser;
