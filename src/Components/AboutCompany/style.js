import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    padding: "104px 205px",
    display: "flex",
    // alignItems: 'center',
  },
  img: {
    width: "540px",
    // height: '498px',
    objectFit: "cover",
    height: "100%",
  },
  right: {
    height: "100%",
    padding: "85px 30px",
    backgroundColor: "#f7f7f7",
    "& h4": {
      color: "#666666",
      fontSize: "15px",
      letterSpacing: "1px",
      lineHeight: "22.5px",
      textTransform: "uppercase",
    },
    "& h2": {
      color: "#a4c639",
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "43.2px",
    },
    "& h3": {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "43.2px",
    },
    "& p": {
      marginTop: "30px",
      fontSize: "14px",
    },
    "& Button": {
      marginTop: "30px",
      padding: "12px 30px",
      backgroundColor: "#a4c639 !important",
      color: "#ffffff",
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: "19.5px",
      textTransform: "uppercase",
      borderRadius: "30px",
    },
  },
  Our: {
    color: "#a4c639",
    fontSize: "36px",
    fontWeight: 600,
    lineHeight: "43.2px",
  },
}));
