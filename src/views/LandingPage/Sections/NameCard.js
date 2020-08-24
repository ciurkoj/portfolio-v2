import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import styles from "../../../assets/jss/landingPageStyle";
const useStyles = makeStyles(styles);
export default function NameCard() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <Grid
          container
          alignItems="flex-end"
          alignContent="flex-end"
          justify="center"
          className={classes.row}
        >
          {" "}
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            style={{
              textAlign: "-webkit-center",
            }}
          >
            <img
              zIndex="2"
              className={classes.image}
              alt="complex"
              src="https://www.shareicon.net/data/256x256/2016/10/11/841505_man_512x512.png"
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={5}
            spacing={4}
            className={classes.title}
          >
            <h1>Hi, I'm Jakub,</h1>
            <h4 className={classes.subtitle}>
              I am a Computer Science student and here{"'"}s my portfolio.
            </h4>
          </Grid>
          {/* <Grid item xs={12}>
              <p
                style={{
                  borderWidth: "80%",
                  paddingTop: "10px",
                }}
              >
                These are programming languages I work with: JavaScript (with
                React and Node) | HTML,CSS&amp;SCSS | Python (with Django) |
                C&amp;C++
              </p>
                </Grid> */}
        </Grid>
      </div>
    </div>
  );
}
