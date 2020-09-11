import React from "react";
import Card from "../../components/Card/Card";
import { Grid, Container } from "@material-ui/core";
export default function ProjectsPage() {
  return (
    <Container
      style={{ backgroundColor: "red", minHeight: "500px", marginTop: "5em" }}
    >
      <Grid container style={{}}>
        <Grid item sm={12} style={{ marginTop: "5em", textAlign: "center" }}>
          <h1> Have a look on some of my projects</h1>
        </Grid>
        <Grid item sm={4}>
          <Card style={{ height: "100px" }}></Card>
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
