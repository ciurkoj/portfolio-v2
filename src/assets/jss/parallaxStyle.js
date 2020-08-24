const parallaxStyle = {
  parallax: {
    height: "90vh",
    maxHeight: "1000px",
    overflow: "hidden",
    position: "absolute",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    margin: "0",
    padding: "0",
    border: "0",
    display: "grid",
    alignItems: "start ",
  },
  filter: {
    "&:before": {
      background:
        "linear-gradient(rgba(0, 0, 0, 0)60%, rgba(255, 255, 255, 1)99%,rgba(255, 255, 255, 1)200%)",
    },
    "&:after,&:before": {
      position: "absolute",
      zIndex: "1",
      width: "100%",
      height: "100%",
      display: "block",
      left: "0",
      top: "0",
      content: "''",
    },
  },
  small: {
    height: "380px",
  },
};

export default parallaxStyle;
