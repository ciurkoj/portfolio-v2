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
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import NameCard from "./Sections/NameCard";
import bg_image from "../../assets/img/bg.jpg";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div
      style={{
        // backgroundImage: "../../assets/img/bg.jpg",
        background: `url(${bg_image})`,
        backgroundSize: "cover",
        width: "auto",
        height: "90vh",
        maxHeight: "1000px",
        backgroundPositionY: "85%",
      }}
    >
      <Container>
        <div className={classes.main}>
          <Header />
          {/* <Parallax
            className={classes.parallax}
            filter
            image={require("../../assets/img/bg.jpg")}
          ></Parallax> */}
          <NameCard />
          <ProjectsPage />
          <Footer />
        </div>
      </Container>
    </div>
  );
}
