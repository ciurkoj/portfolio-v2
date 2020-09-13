import React from "react";
import Card from "../../components/Card/Card";
import { Grid, Container, Typography } from "@material-ui/core";
import version2 from "../../assets/img/version2.png";
import automation from "../../assets/img/automation.png";
import tictactoe from "../../assets/img/tictactoe.png";
export default function ProjectsPage() {
  return (
    <Container
      style={{
        background: "rgba(255,255,255,0.8 )",
        minHeight: "500px",
        marginTop: "5em",
        borderRadius: "10px",
        marginBottom: "2em",
        zIndex: "100",
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
          <Card
            projectsImage={tictactoe}
            style={{ height: "100px" }}
            projectName="Tic Tac Toe"
            projectSubtitle="In this project I practiced using React Hooks with this simple game such as Tic Tac Toe."
            projectDescription="The game itself consist of 2 components: Board and Square. A Square is the simplest element, 
            it renders a button with with a value passed in props. When button is clicked, it triggers a function passed also in props.
            The function puts the next value (X or O) inside of the square. The Board collects squares and displays them in right order.
            Game.js is responsible for game's logic, game needs only 3 methods: handleClick(), jumpTo() and renderMoves(). 
            HandleClick handles whose turn is now and services game's history. JumpTo() switches between steps that have been made. 
            RenderMoves() renders game's history, allowing user to go step back. "
            githubLink="https://github.com/ciurkoj/tictactoe"
            liveDemo="https://ciurkoj.github.io/tictactoe/"
          ></Card>
        </Grid>
        <Grid item sm={4}>
          <Card
            projectName="Web Automation with Django"
            projectSubtitle="Project in progress, app build with Python Django, deployed on Google Cloud Platform, styled with BootStrap."
            projectDescription="The idea is to mix Django with Selenium Web Driver to automate browser-based strategy game.
          I just want to transfer resources from town to town and the max capacity of single transport is too small, so as a player I need to log in a few times a day, which I find silly. There is better, free way to set a queue.[Latest update: I've decided to move from heroku to GCP, GCP is more professional tool and fulfils all project's needs.]"
            githubLink="https://github.com/jciurko/web_automation"
            liveDemo="https://bottyfy.nw.r.appspot.com"
            projectsImage={automation}
          ></Card>
        </Grid>
        <Grid item sm={4}>
          <Card
            projectName="ExchangeBay"
            projectSubtitle="The final product allows users to upload images, tracks transactions, 
            restores passwords through links sent to users on request."
            projectDescription="Basically, it is a very small and basic ebay.As team of 2nd year students we had to deliver a fully functional website.
          We had to keep the highest standard of project development, providing project documentation, unit and acceptance testing. 
          In the project we have used Node.js, Handlebars with Koa.js framework (newer Express.js) keeping the standard of ES6. 
          The project taught me a lot about working in a team, especially how to assing tasks, how to deal with delays 
          and how help others if they face a problem. For example we have used GitHub Project Issues to manage tasks previously discussed on MS Teams or What'sApp."
            projectsImage="https://www.pngmart.com/files/7/Exchange-PNG-Transparent-Picture.png"
            githubLink="https://github.com/jciurko/ExchangeBay"
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
      </Grid>
    </Container>
  );
}
