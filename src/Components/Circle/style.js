import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  circle: {
    height: "500px",
    width: "600px",
    backgroundColor: (props) =>
      props.direction === "top" ? "#FBF46D" : "#998CEB",
    borderRadius: "50%",
    position: "absolute",
    top: (props) => (props.direction === "top" ? "-200px" : ""),
    bottom: (props) => (props.direction === "bottom" ? "-200px" : ""),
    left: (props) => (props.direction === "top" ? "-350px" : ""),
    right: (props) => (props.direction === "bottom" ? "-350px" : ""),
    overflow: "hidden",
    opacity: 0.5,
    zIndex: 1,
  },
}));
