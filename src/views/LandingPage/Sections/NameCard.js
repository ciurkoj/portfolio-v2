import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import styles from "../../../assets/jss/landingPageStyle";
const useStyles = makeStyles(styles);
export default function NameCard() {
  const classes = useStyles();
  return (
    <div>
      <div
        className={classes.container}
        style={{ background: "rgba(255,255,255,0.4)" }}
      >
        <Grid
          container
          alignItems="flex-end"
          alignContent="flex-end"
          justify="space-evenly"
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
              I am a Computer Science student and this is my portfolio.
            </h4>
          </Grid>
        </Grid>
        {/* <Grid container justify="space-evenly">
          <Grid
            item
            xs={12}
            className={classes.title}
            style={{ textAlign: "center" }}
          >
            <Typography
              variant="h5"
              style={{ marginBottom: "0", marginTop: "1em" }}
            >
              These are my primary programming languages:
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className={classes.title}
            style={{
              // borderWidth: "80%",
              //   marginTop: "",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              style={{
                marginBottom: "0",
                //    marginTop: "1em"
              }}
            >
              JavaScript (with React and Node) | HTML,CSS&amp;SCSS | Python
              (with Django) | C&amp;C++
            </Typography>
          </Grid>
        </Grid> */}

        <Grid
          container
          className={classes.findmeSection}
          style={{
            fontSize: "1em",
            // marginTop: "2em",
            borderTop: "dotted 5px",
            padding: "1em",
            paddingRight: "0",
            paddingLeft: "0",
            width: "initial",
          }}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid
            item
            xs={3}
            sm={3}
            // className={classes.title}
            style={{ display: "contents" }}
          >
            <Typography className={classes.findme} style={{ minWidth: "7rem" }}>
              Find me on:
            </Typography>
          </Grid>
          <Grid
            item
            xs={2}
            sm={3}
            md={2}
            xl={2}
            className={classes.contactLinks}
            style={{ display: "contents" }}
          >
            <a
              href="https://www.linkedin.com/in/jakub-ciurko/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              <p> LinkdedIn</p>
            </a>
          </Grid>
          <Grid
            item
            xs={2}
            sm={2}
            md={2}
            xl={2}
            className={classes.contactLinks}
          >
            <a
              href="https://github.com/ciurkoj"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
              <p>GitHub</p>
            </a>
          </Grid>{" "}
          <Grid
            item
            xs={2}
            sm={4}
            md={3}
            xl={3}
            className={classes.contactLinks}
            style={{ display: "contents" }}
          >
            <a href="mailto:ciurkoj@outlook.com">
              <EmailIcon />
              <p>Send me an email</p>
            </a>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
