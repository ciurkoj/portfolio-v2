import React from "react";
import Card from "../../components/Card/Card";
import { Grid, Container, Typography } from "@material-ui/core";
import contemplativeReptile from "../../assets/img/contemplative-reptile.jpg";
import version2 from "../../assets/img/version2.png";
import emoji from "react-easy-emoji";
export default function ProjectsPage() {
  return (
    <Container
      style={{
        background: "rgba(255,255,255,0.4 )",
        minHeight: "500px",
        marginTop: "5em",
        borderRadius: "10px",
        marginBottom: "2em",
      }}
    >
      <Grid container style={{}}>
        <Grid
          item
          style={{
            margin: "2em",

            marginRight: "auto",
            marginLeft: "auto",
            color: "rgb(54 64 78)",
            maxWidth: "80%",
            textAlign: "center",
          }}
        >
          <Typography variant="h2" gutterBottom>
            Take a look on some of my recent projects
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Card
            projectsImage={version2}
            style={{ height: "100px" }}
            projectName="Portfolio V.2"
            projectSubtitle="Here's more responsive and better designed 2nd version of my proftfolio. Created with MaterialUI"
            projectDescription="After a few other projects, I have decided to upgrade my online portfolio. The previous version was too messed up to update it, but it was my first project in ReactJS and I'm keeping so I could see future progress. 
            To build this website I have switched the main framework to MaterialUI as it is more popular and gives more tools than Material Design Lite. 
            I am glad that you are reading this project's description. Have a nice day! 😃"
            githubLink="https://github.com/ciurkoj/portfolio-v2 "
            liveDemo="https://jciurko.github.io/portfolio-v2/"
          ></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
        <Grid item sm={4}>
          <Card></Card>
        </Grid>
      </Grid>
    </Container>
  );
}
