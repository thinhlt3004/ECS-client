import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    padding: "140px 205px",
    display: "flex",
    zIndex: 3,
  },
  listItem: {
    flex: 1,
    marginRight: "60px",
    marginBottom: '40px',
  },
  item: {
    width: "350px",
    height: "90px",
    backgroundColor: "#a4c639",
    color: "#121212",
    fontSize: "20px",
    fontWeight: 700,
    textTransform: "capitalize",
    lineHeight: "30px",
    marginBottom: "15px",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  left: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px",
    "& > h3": {
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "1px",
      lineHeight: "30px",
    },
  },
  leftActive: {
    color: "white",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "30px",
    "& > h3": {
      fontSize: "20px",
      fontWeight: 700,
      letterSpacing: "1px",
      lineHeight: "30px",
    },
  },
  Icon: {
    fontSize: "20px !important",
  },
  right: {
    flex: 2,
    zIndex: 3,
    "& > h4": {
      color: "#212529",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "25px",
      margin: "30px 0px 15px",
    },
    "& > p": {
      color: "#7a7a7a",
      fontSize: "14px",
      lineHeight: "30px",
    },
  },
}));
