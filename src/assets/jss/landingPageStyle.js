import { container, title } from "./material-kit-react";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",

    background: "linear-gradient(rgba(0, 0, 0, 0.3)10%, rgba(0, 0, 0, 0.5))",

    border: "50px",
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    margin: "0",
    minHeight: "auto",
    color: "#FFFFFF",
    textDecoration: "none",
    "@media (max-width: 960px)": {
      textAlign: "center",
    },
  },
  subtitle: {
    fontSize: "1rem",
    marginLeft: "-30px",
    marginRight: "-30px",
    "@media (max-width: 960px)": {
      textAlign: "center",
    },
  },
  main: {
    background: "transparent",
    position: "relative",
    zIndex: "0",
    margin: "-10px",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  parallax: {
    position: "absolute",
    top: "0px",
    zIndex: "-1",
    width: "100%",
  },
  image: {
    textAlign: "center",
    "@media (max-width: 600px)": {
      width: "70%",
    },
  },
  row: {
    padding: "30px",
    height: "200px",
    flexDirection: "row-reverse",
    "@media (max-width: 960px)": {
      flexDirection: "row",
      alignContent: "flex-end",
    },
  },
};

export default landingPageStyle;
