import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  locationInfo: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  contact: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f7f7f7",
    padding: "60px 30px",
    marginRight: "30px",
    justifyContent: "center",
    alignItems: "center",
    width: "350px",
    height: "350px",
    zIndex: 3,
    "& > p": {
      textAlign: "center",
      color: "#a4c639",
      fontSize: "15px",
      fontWeight: 600,
      lineHeight: "22.5px",
    },
    "& > h3": {
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "0.25px",
      lineHeight: "24px",
      marginBottom: "15px",
    },
  },
  Icon: {
    color: "#a4c639",
    fontSize: "48px !important",
    marginBottom: "40px",
  },
}));
