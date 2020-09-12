import React from "react";
import Card from "../../components/Card/Card";
import { Grid, Container, Typography } from "@material-ui/core";
import contemplativeReptile from "../../assets/img/contemplative-reptile.jpg";

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
            Have a look on some of my recent projects
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <Card
            style={{ height: "100px" }}
            projectName="MyPortfolio project"
            projectSubtitle="The main goal is to have a website where I can show all my work I've done. 
            I'd like start a blog, so maybe some day it'll change its nature."
            projectDescription="This website may not be well designed and but I'm just a junior developer 
            with only some experience in coding mixed with loads of will and persistence to become a full time software developer. 
            To build this website I've tools such as: React with React Material Design Lite and basic pack of frontend languages: JavaScript, HTML5, CSS3"
            url={contemplativeReptile}
            githubLink="https://github.com/jciurko/my_portfolio"
            liveDemo="https://jciurko.github.io/my_portfolio/"
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
