import React, { useEffect, useState } from "react";
import { Brand, ContactInformation, Header } from "../../Components";
import { useStyles } from "./style";
import Chart from "react-apexcharts";
import { useParams } from "react-router-dom";
import * as API from "./../../Api/index";
import ReactExport from "react-data-export";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

const ChartView = () => {
  const classes = useStyles();
  const [stateMent, setState] = useState(null);
  const [serviceInfo, SetServiceInfo] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(1);
  const [totalPrice, setTotalPrice] = useState([]);
  const [count, setCount] = useState([]);
  const [dates, setDates] = useState([]);
  const [data, setData] = useState([]);
  const [multiData, setMultiData] = useState([]);
  const serviceID = useParams().id;
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    const fetchData = async () => {
      if (serviceID !== null) {
        const d = new Date();
        let month = d.getMonth() + 1;
        setCurrentMonth(month);
        const payload = {
          id: serviceID,
          month: month,
        };
        const resSer = await API.getServiceOfCusBySCId(serviceID);
        if (resSer.status === 200) {
          SetServiceInfo(resSer.data);
        }
        // console.log(resSer.data);
        const res = await API.getReportResultById(payload);
        if (res.status === 200) {
          let totalP = [];
          let totalD = [];
          let totalA = [];
          res.data.forEach((i) => {
            totalP.push(i.totalPrice);
            totalD.push(i.date.slice(0, 10));
            totalA.push(i.amount);
          });
          setData(res.data);
          setTotalPrice(totalP);
          setDates(totalD);
          setCount(totalA);
        }
      }
    };
    fetchData();
  }, [serviceID]);
  useEffect(() => {
    if (data.length > 0) {
      let dataRow = [];
      let totalPayment = 0;
      data.forEach((i) => {
        totalPayment += i.totalPrice;
        dataRow.push([
          {
            value: i.date.slice(0, 10),
            width: { wpx: 200 },
            style: { alignment: { horizontal: "center" }, font: { sz: "13" } },
          },
          {
            value: i.amount,
            width: { wpx: 250 },
            style: { alignment: { horizontal: "center" }, font: { sz: "13" } },
          },
          {
            value: "$ " + i.totalPrice.toString(),
            width: { wpx: 200 },
            style: {
              alignment: { horizontal: "right" },
              font: { sz: "15", bold: true },
            },
          },
        ]);
      });
      dataRow.push([
        {
          value: "",
          width: { wpx: 200 },
          style: { alignment: { horizontal: "center" }, font: { sz: "13" } },
        },
        {
          value: "Total Payments",
          width: { wpx: 250 },
          style: { alignment: { horizontal: "center" }, font: { sz: "13" } },
        },
        {
          value: "$ " + totalPayment.toString(),
          width: { wpx: 200 },
          style: {
            alignment: { horizontal: "right" },
            font: { sz: "15", color: { rgb: "FFFF0000" }, bold: true },
          },
        },
      ]);
      setMultiData([
        {
          columns: [
            {
              title: "Date",
              width: { wpx: 200 },
              style: {
                alignment: { horizontal: "center" },
                font: { bold: true },
              },
            }, //char width
            {
              title: "Amount of Products",
              width: { wpx: 250 },
              style: {
                alignment: { horizontal: "center" },
                font: { bold: true },
              },
            },
            {
              title: "Total Payment per Day ($)",
              width: { wpx: 200 },
              style: {
                alignment: { horizontal: "center" },
                font: { bold: true },
              },
            }, //pixels width
          ],
          data: dataRow,
        },
      ]);
    }
  }, [data]);
  useEffect(() => {
    setState({
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: dates.length > 0 ? dates : [],
          labels: {
            style: {
              fontSize: "14px",
            },
            text: "date",
          },
        },
        yaxis: [
          {
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#FF1654",
            },
            labels: {
              style: {
                colors: "#FF1654",
              },
            },
            title: {
              text: "Amount of Products",
              style: {
                color: "#FF1654",
              },
            },
          },
          {
            opposite: true,
            axisTicks: {
              show: true,
            },
            axisBorder: {
              show: true,
              color: "#247BA0",
            },
            labels: {
              style: {
                colors: "#247BA0",
              },
            },
            title: {
              text: "Profit",
              style: {
                color: "#247BA0",
              },
            },
          },
        ],
      },
      series: [
        {
          name: "Amount of Products",
          type: "column",
          data: count.length > 0 ? count : [],
        },
        {
          name: "Profit",
          type: "column",
          data: totalPrice.length > 0 ? totalPrice : [],
        },
        {
          name: "Total Price",
          type: "line",
          data: totalPrice.length > 0 ? totalPrice : [],
        },
      ],
      stroke: {
        curve: "straight",
      },
    });
  }, [count, dates, totalPrice]);

  const handleChangeMonth = async (e) => {
    setCurrentMonth(e.target.value);
    const payload = {
      id: serviceID,
      month: e.target.value,
    };
    const res = await API.getReportResultById(payload);
    if (res.status === 200) {
      let totalP = [];
      let totalD = [];
      let totalA = [];
      res.data.forEach((i) => {
        totalP.push(i.totalPrice);
        totalD.push(i.date.slice(0, 10));
        totalA.push(i.amount);
      });
      setData(res.data);
      setTotalPrice(totalP);
      setDates(totalD);
      setCount(totalA);
    }
  };
  return (
    <div>
      <Header type="chart" />
      <div className={classes.chartContainer}>
        <h2>Performance Details Chart</h2>
        <div className={classes.btnBlock}>
          {serviceInfo && <div className={classes.infoBlock}>
            <p>ProductName: <b>{serviceInfo.product}</b></p>
            <p>ProductPrice: <b>$ {serviceInfo.productPrice}</b></p>
            <div>
              <span>Start Date: <b>{serviceInfo.startDate.slice(0, 10)}</b></span>
              <span>End Date: <b>{serviceInfo.endDate.slice(0, 10)}</b></span>
            </div>
          </div>}
          <FormControl style={{ height: "20px", width: '140px' }}>
            <InputLabel id="demo-simple-select-label">Month</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={currentMonth}
              label="Month"
              onChange={handleChangeMonth}
            >
              {months.map((i, index) => (
                <MenuItem key={index} value={index + 1}>
                  {i}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {data.length > 0 ? (
            <ExcelFile
              element={
                <Button variant="contained" className={classes.btnDownReport}>
                  Export Report to Excel
                </Button>
              }
            >
              <ExcelSheet dataSet={multiData} name="data"></ExcelSheet>
            </ExcelFile>
          ) : (
            <Button
              variant="contained"
              disabled={true}
              className={classes.btnDownReportDisabled}
            >
              Export Report to Excel
            </Button>
          )}
        </div>
        <div className={classes.chart}>
          {stateMent !== null && (
            <Chart
              options={stateMent.options}
              series={stateMent.series}
              // type="line"
              height="70%"
              style={{
                width: "80%",
                fontSize: "14px",
                fontWeight: "bold !important",
              }}
            />
          )}
        </div>
      </div>
      <Brand />
      <ContactInformation />
    </div>
  );
};

export default ChartView;
