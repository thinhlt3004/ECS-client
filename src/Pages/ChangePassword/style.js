import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  ChangePasswordBlock: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ChangePasswordForm: {
    display: "flex",
    alignItems: "flex-start",
    padding: "20px 40px",
    // justifyContent: "center",
    backgroundColor: "#343434",
    opacity: 0.7,
    flexDirection: "column",
    borderRadius: "30px",
    minHeight: "30%",
    width: "25%",
    "& > span": {
      color: "#ffffff",
      fontSize: "20px",
      fontWeight: 500,
      lineHeight: "30px",
      marginBottom: '10px',
    },
    "& > input": {
      width: "100%",
      padding: "10px 15px",
      borderRadius: "30px",
      border: "none",
      marginBottom: "10px",
    },
    "& > input:focus": {
      outline: "none",
    },
  },
  btnBlock: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "15px",
    "& > Button": {
      backgroundColor: "black !important",
      color: "white !important",
      marginTop: "10px",
      padding: "5px 20px",
      borderRadius: "28px",
      fontSize: "15px",
      fontWeight: 700,
      transition: "all 1s ease",
    },
    "& > Button:hover": {
      transform: "scale(1.1)",
    },
  },
}));
