import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  loginBlock: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loginForm: {
    display: "flex",
    alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#343434",
    opacity: 0.7,
    flexDirection: "column",
    borderRadius: "30px",
    height: "50%",
    width: "30%",
    "& > h2": {
      marginTop: "40px",
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "30px",
      color: 'white',
    },
    "& > div": {
      backgroundColor: "#ffffff",
      marginBottom: "20px",
      display: "flex",
      alignItems: "center",
      borderRadius: "10px",
      padding: "10px",
      width: "70%",
    },
    "& > div > input": {
      border: "none",
      outline: "none",
      color: "grey",
      width: '100%',
      paddingLeft: "15px",
      "& > div > input:focus": {
        outline: "none",
      },
    },
    '& > Button': {
        backgroundColor: 'black !important',
        color: 'white !important',
        marginTop: '10px',
        padding: '10px 36px',
        borderRadius: '28px',
        width:'122px',
        height:'46px',
        fontSize: '15px',
        fontWeight: 700,
        transition: "all 1s ease",
    },
    "& > Button:hover": {
      transform: "scale(1.1)",
    },
  },
  IconBlock: {
    borderRadius: "50%",
    border: '1px solid grey',
    padding: "5px",
    width: '30px',
    height: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Icon: {
    fontSize: "20px !important",
    color: "grey",
  }
}));
