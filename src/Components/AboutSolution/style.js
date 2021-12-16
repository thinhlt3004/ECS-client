import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    padding: "140px 205px",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  left: {
    flex: 1,
    marginRight: "20px",
    "& h3": {
      fontSize: "15px",
      letterSpacing: "1px",
      lineHeight: "25px",
      textTransform: "uppercase",
    },
    "& h1": {
      fontSize: "36px",
      fontWeight: 600,
      lineHeight: "45px",
      marginTop: "10px",
      marginBottom: "40px",
    },
    "& p": {
      fontSize: "14px",
      lineHeight: "30px",
      marginBottom: "40px",
    },
    "& Button": {
      backgroundColor: "#a4c639 !important",
      color: "#ffffff !important",
      fontSize: "13px",
      fontWeight: 700,
      lineHeight: "19.5px",
      padding: "12px 30px",
      textTransform: "uppercase",
      borderRadius: "30px",
    },
  },
  right: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    zIndex: 3,
  },
  rightItem: {
    height: "154px",
    width: "255px",
    backgroundColor: "rgba(250,250,250,0.1)",
    padding: "25px 30px 35px",
    marginBottom: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",  
    '& p':{
        color: '#ffffff',
        fontSize: '20px',
        fontWeight: 600,
        letterSpacing: 0.5,
        lineHeight: "30px"
    }
  },
  countUp: {
    color: "#a4c639",
    fontSize: "36px",
    fontWeight: 700,
    lineHeight: "54px",
  },
}));
