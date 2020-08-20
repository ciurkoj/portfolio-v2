import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import { Grid, Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { flexbox } from "@material-ui/system";

// @material-ui/icons

// core components
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import Footer from "../../components/Footer/Footer";
import Parallax from "../../components/Parallax/Parallax";
import Paper from "@material-ui/core/Paper";

import styles from "../../assets/jss/landingPageStyle.js";

// Sections for this page
import ResumePage from "../ResumePage/ResumePage.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div className={classes.main}>
      <Header />
      <Parallax
        className={classes.parallax}
        filter
        image={require("../../assets/img/bg.jpg")}
      >
        <div className={classes.container}>
          <Grid container xs={12} sm={12} md={12} lg={12} spacing={3}>
            <Grid
              sm={6}
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <h1>Hi, I'm Jakub.</h1>
            </Grid>
            <Grid item sm={6}>
              <img
                zIndex="2"
                justify="center"
                className={classes.img}
                alt="complex"
                src="https://www.shareicon.net/data/256x256/2016/10/11/841505_man_512x512.png"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <h4 style={{ padding: "30px" }}>
                I am a Computer Science student and here{"'"}s my portfolio.
                <p
                  style={{
                    borderTop: "5px dotted white",

                    padding: "20px",
                  }}
                >
                  These are programming languages I work with: JavaScript (with
                  React and Node) | HTML,CSS&amp;SCSS | Python (with Django) |
                  C&amp;C++
                </p>
              </h4>
            </Grid>
          </Grid>
          {/* <Grid container xs={12} sm={12} md={12} lg={12}>
            <Grid item justify="flex-end">
              {" "}
              <h1>Hi, I'm Jakub.</h1>
            </Grid>
            {/* <img
                  justify="flex-end"
                  className={classes.img}
                  alt="complex"
                  src="https://material-ui.com/static/images/grid/complex.jpg"
                /> 
            <h4>
              I am a Computer Science student and here{"'"}s my portfolio.
              <p
                style={{
                  borderTop: "5px dotted white",

                  padding: "20px",
                }}
              >
                These are programming languages I work with: JavaScript (with
                React and Node) | HTML,CSS&amp;SCSS | Python (with Django) |
                C&amp;C++
              </p>
            </h4>
            <br />
          </Grid> */}
        </div>
      </Parallax>
      <div>
        <div className={classes.container}>
          <ResumePage />
        </div>
      </div>
      <Footer />
    </div>
  );
}
