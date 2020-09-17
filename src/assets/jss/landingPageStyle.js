import { container, title } from "./material-kit-react";

const landingPageStyle = {
  container: {
    "@media (max-width: 400px)": {
      maxWidth: "440px",
    },
    "@media (min-width: 576px)": {
      maxWidth: "440px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "680px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "960px",
    },
    zIndex: "12",
    color: "#FFFFFF",
    marginTop: "6em",
    marginBottom: "6em",
    background:
      "linear-gradient(rgba(255, 255, 255, 0.1)10%, rgba(255, 255, 255, 0.2))",

    border: "50px",

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
    color: "#102f3b",
    textDecoration: "none",
    "@media (max-width: 960px)": {
      textAlign: "center",
    },
  },
  findme: {
    marginBottom: "0",
    fontSize: "x-large",
    color: "#102f3b",
    "@media(max-width:425px)": {
      fontSize: "large",
    },
  },
  findmeSection: {
    "& a": {
      "& p": {
        "@media(max-width:425px)": {
          display: "none",
        },
      },
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
    "@media (max-width: 960px) ": {
      maxWidth: "200px",
    },
    "@media (max-width: 600px)": {
      width: "50%",
    },
  },
  row: {
    height: "200px",
    flexDirection: "row-reverse",
    "@media (max-width: 960px)": {
      flexDirection: "row",
      alignContent: "flex-end",
    },
  },
  contactLinks: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    "& p": {
      margin: "5px",
      //   "@media (max-width: 800px)": {
      //     display: "none",
      //   },
    },
    "& a": {
      textDecoration: "none",
      color: "#102f3b",
      display: "contents",
    },
  },
  projectsPage: {
    fontSize: "xxx-large",
    "@media (max-width: 960px)": { fontSize: "x-large" },
  },
};

export default landingPageStyle;
