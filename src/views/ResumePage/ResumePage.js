import React from "react";
// plugin that creates slider

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Radio from "@material-ui/core/Radio";
import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import People from "@material-ui/icons/People";
import Check from "@material-ui/icons/Check";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import { Grid, Button } from "@material-ui/core";

import styles from "../../assets/jss/resumePageStyles";

const useStyles = makeStyles(styles);

export default function ResumePage() {
  const classes = useStyles();

  return (
    <div
      style={{
        backgroundColor: "aliceblue",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        textAlign: "center",
        marginTop: "5em",
      }}
    >
      <p> Sorry, this page is coming soon.</p>
    </div>
  );
}
