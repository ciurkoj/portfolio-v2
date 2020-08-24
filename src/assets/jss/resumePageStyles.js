import { container, title } from "./material-kit-react";

const basicsStyle = {
  sections: {
    padding: "70px 0",
  },
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
    background: "white",

    border: "50px",

    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    ...container,
  },
  title: {
    ...title,
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  space50: {
    height: "50px",
    display: "block",
  },
  space70: {
    height: "70px",
    display: "block",
  },
  icons: {
    width: "17px",
    height: "17px",
    color: "#FFFFFF",
  },
};

export default basicsStyle;
