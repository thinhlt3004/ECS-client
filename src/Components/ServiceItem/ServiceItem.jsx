import { Button, TableCell } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./style";
import * as API from './../../Api/index';
import { useHistory } from "react-router-dom";
const ServiceItem = ({ service }) => {
  const classes = useStyles();
  const [sc, setService] = useState(null);
  const [emp, setEmp] = useState(null);
  const history = useHistory();
  useEffect(() => {
      const fetchService = async () => {
          const res = await API.getServiceById(service.serviceId);
          if(res.status === 200) {
            setService(res.data);
          }
          const resEmp = await API.getServiceEmployees(service.id);
          if(resEmp.status === 200) {
              if(resEmp.data !== null){
                const response = await API.getEmployeeById(resEmp.data.empId);
                if(response.status === 200) {
                    setEmp(response.data);
                }
              }
          }
      }
      fetchService();
  },[service])
  const handleClick =() => {
    history.push(`/chart/${service.id}`);
  }
  return (
    <>
      <TableCell align="center">
        <h4 style={{textTransform: 'uppercase', marginBottom: '10px'}}>{sc !== null && sc.name}</h4>
        <div className={classes.leftBottom}>
          <div>Start Date: <b>{service.startDate.slice(0, 10)}</b></div>
          <div>End Date: <b>{service.endDate.slice(0, 10)}</b></div>
        </div>
      </TableCell>
      <TableCell align="center">
        <div>Product:<b>{service.product}</b></div>
        <div>Price: <b>{service.productPrice}</b></div>
      </TableCell>
      <TableCell align="center">
        <div>Price:<b> $ {service.currentPrice}</b></div>
        <div>Status: <b style={{color: 'red', fontWeight: 'bold'}}>Paid</b></div>
      </TableCell>
      <TableCell align="center">
        <div>Employee: <span style={{color: 'red', fontWeight: 'bold', textTransform: 'uppercase'}}>{emp !== null ? emp.userName : 'Pending'}</span></div>
        {emp !== null && <div>Contact Number: <span  style={{color: 'red', fontWeight: 'bold', textTransform: 'uppercase'}}> {emp.phoneNumber}</span></div>}
      </TableCell>
      <TableCell align="center">
        <Button variant="contained" className={classes.viewBtn} onClick={handleClick}>View</Button>
      </TableCell>
    </>
  );
};

export default ServiceItem;
