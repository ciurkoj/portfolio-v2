import { fade, makeStyles } from "@material-ui/core/styles";

const theme1 = {
  grow: {
    flexGrow: 1,
    zIndex: 2,
  },
  menuButton: {
    marginRight: "16px",
  },
  title: {
    display: "none",
    textAlign: "center",
    fontFamily: "'Dancing Script', cursive",
    //paddingLeft: "3em",
    "@media (min-width:300px)": {
      display: "block",
      fontSize: "1.5em",
      textAlign: "center",
    },
    "@media (min-width:400px)": {
      display: "block",
      fontSize: "2em",
    },
    "@media (min-width:2000px)": {
      display: "block",
      fontSize: "3em",
    },
    "@media (min-width:2400px)": {
      display: "block",
      fontSize: "4em",
    },
  },

  inputRoot: {
    color: "inherit",
  },

  sectionDesktop: {
    display: "none",
    "@media (min-width:930px)": {
      display: "block",
    },
  },
  sectionMobile: {
    display: "flex",
    "@media (min-width:930px)": {
      display: "none",
    },
  },
  buttonsSectionDesktop: {
    // marginRight: "0.5em",
    // marginBottom: "10px",
    // color: "rgba(0,0,0,0.7)",
    // border: "2px",
    // borderRadius: "16px",
    // boxShadow:
    //   "0 1px 1px 0px rgba(0, 0, 0, 0.05), 0 2px 2px 2px rgba(0, 0, 0, 0.05)",
    // "@media (min-width:600px)": {
    //   fontSize: "2em",
    // },
    // "@media (min-width:2000px)": {
    //   fontSize: "3em",
    // },
  },
};
export default theme1;
