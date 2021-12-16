import React, { useState } from "react";
import { useStyles } from "./style";
import { ServiceList as list } from "./../../dummyData";
import { ArrowForwardIos } from "@mui/icons-material";
const ServiceList = () => {
  const classes = useStyles();
  const [sliderIndex, setSliderIndex] = useState(0);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className={classes.container}>
      <div className={classes.listItem}>
        {list.map((i, index) => (
          <div key={index} className={classes.item}>
            <div
              className={sliderIndex === index ? classes.leftActive :classes.left}
              onClick={(e) => setSliderIndex(index)}
            >
              <h3>{i.name}</h3>
              <ArrowForwardIos className={classes.Icon} />
            </div>
            <br />
          </div>
        ))}
      </div>
      {list.map(
        (i, index) =>
          sliderIndex === index && (
            <div key={index} className={classes.right}>
              <img src={`${PF}/images/${i.img}`} alt={i.img} />
              <h4>{i.name}</h4>
              <p>{i.desc}</p>
            </div>
          )
      )}
    </div>
  );
};

export default ServiceList;
