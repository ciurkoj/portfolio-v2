import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
import ResumePage from "../ResumePage/ResumePage";
import ProjectsPage from "../ProjectsPage/ProjectsPage";
import NameCard from "./Sections/NameCard";
import bg_image from "../../assets/img/bg.jpg";
import tatry1 from "../../assets/img/tatry1.jpg";

import ReactGA from "react-ga";

function initializeReactGA() {
  ReactGA.initialize("UA-168054630-1");
  ReactGA.pageview("/portfolio-v2");
}
const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  initializeReactGA();
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div
      style={{
        // backgroundImage: "../../assets/img/bg.jpg",
        background: `linear-gradient(rgba(255,255,255,0.1),rgba(0,0,0,0.3)70%, rgba(197,190,183,0.5)90%,rgba(231,229,226,1)100%),url(${tatry1})`,
        backgroundSize: "cover",
        width: "auto",
        height: "60vh",
        maxHeight: "1000px",
        // backgroundPositionY: "85%",
      }}
    >
      <Router>
        <Container>
          <div className={classes.main}>
            {/* <Parallax
            className={classes.parallax}
            filter
            image={require("../../assets/img/bg.jpg")}
          ></Parallax> */}
            <Header />
            <Switch>
              <Route
                exact
                path="/portfolio-v2"
                render={(props) => (
                  <div>
                    <NameCard />
                    <ProjectsPage />
                  </div>
                )}
              ></Route>
              <Route
                path="/portfolio-v2/resume-page"
                render={(props) => <ResumePage />}
              ></Route>
            </Switch>

            <Footer />
          </div>
        </Container>
      </Router>
    </div>

    // <Router>
    //   <div>
    //     <Header />
    //     <Switch>
    //       <Route
    //         exact
    //         path="/"
    //         render={(props) => (
    //           <div>
    //             <NameCard />
    //             <ProjectsPage />
    //           </div>
    //         )}
    //       ></Route>

    //       <Route
    //         path="/resume-page"
    //         render={(props) => (
    //           <div>
    //             <ResumePage />
    //           </div>
    //         )}
    //       ></Route>
    //     </Switch>
    //   </div>
    // </Router>
  );
}
