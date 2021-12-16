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
    // alignItems: "center",
    // justifyContent: "center",
    backgroundColor: "#343434",
    opacity: 0.7,
    flexDirection: "column",
    borderRadius: "30px",
    minHeight: "50%",
    minWidth: "50%",
    "& > h2": {
      marginTop: "40px",
      fontSize: "36px",
      fontWeight: 700,
      marginBottom: "30px",
      color: "white",
      textAlign: "center",
    },
  },
  twoInput: {
    display: "flex",
    margin: "10px 100px",
    justifyContent: "flex-start",
    "& > div > p": {
      color: "white",
      marginBottom: "10px",
    },
    "& > div > input": {
      border: "none",
      outline: "none",
      color: "grey",
      padding: "10px 15px",
      width: "340px",
      marginRight: "20px",
      borderRadius: "30px",
      marginBottom: "10px",
      "& > div > input:focus": {
        outline: "none",
      },
    },
    "& > div > select": {
      padding: "10px 15px",
      borderRadius: "30px",
      width: "340px",
      "& > div > select:focus": {
        outline: "none",
      },
    },
  },
  OneInput: {
    display: "flex",
    justifyContent: "center",
    "& > div > p": {
      color: "white",
    },
  },
  TextField: {
    color: "white !important",
    border: "none !important",
    "& input": {
      border: "none !important",
      color: "#808080 !important",
      backgroundColor: "white !important",
      height: "10px",
      borderRadius: "30px",
      width: "300px",
      margin: "10px",
    },
  },
  btnBlock:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center !important',
    marginBottom: '40px',
    '& > Button':{
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
    '& > Button:hover':{
        transform: "scale(1.1)",
    }
  }
}));
