import React from "react";
import Card from "../../components/Card/Card";
import { Grid, Container, Typography } from "@material-ui/core";
import version2 from "../../assets/img/version2.png";
import automation from "../../assets/img/automation.png";
import tictactoe from "../../assets/img/tictactoe.png";
import exchange from "../../assets/img/exchange.png";
import onlineStore from "../../assets/img/online-store.png";
import electricalDevice from "../../assets/img/electricalDevice.jpg";
import bigDataProject from "../../assets/img/bigDataProject.jpg";
import portfolioV1 from "../../assets/img/portfolioV1.png";
import styles from "../../assets/jss/landingPageStyle.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);
export default function ProjectsPage() {
  const classes = useStyles();

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
          xs={12}
        >
          <Typography className={classes.projectsPage} gutterBottom>
            Take a look on some of my recent projects
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            projectsImage={version2}
            style={{ height: "100px" }}
            projectName="Portfolio v.2.0"
            projectSubtitle="Here's more responsive and better designed 2nd version of my proftfolio. Created with MaterialUI"
            projectDescription="After a few other projects, I have decided to upgrade my online portfolio. The previous version was too messed up to update it, but it was my first project in ReactJS and I'm keeping so I could see future progress. 
            To build this website I have switched the main framework to MaterialUI as it is more popular and gives more tools than Material Design Lite. 
            I am glad that you are reading this project's description. Have a nice day! 😃"
            githubLink="https://github.com/ciurkoj/portfolio-v2 "
            liveDemo="https://jciurko.github.io/portfolio-v2/"
          ></Card>
        </Grid>
        <Grid item item xs={12} sm={6} md={4}>
          <Card
            projectName="Refreshed website"
            projectSubtitle="I found an electronics company with outdated, unresponsive and slow website and simply refreshed it. A little bit of React with Material UI and it glows again."
            projectDescription="It was a quick project, where I didn't need to think about a design. The main goal was to improve elements positioning, replace images with text to a real containers with pictures. At the end I've focused on websites speed. The old version is hosted on a slow server, if we add to it bunch of low quality pictures instead of text, we get a website where average loading time is about 10s. That is mad! In my version, the image size is matched to the screen size, which translates into an average loading time of less than 1 second.

            Also, with this project I've improved my repository organising style thanks to free Material UI templates. I tried to style the website with SCSS, but eventually I've decided it won't be useful for such a small project.
            I know my design skills are not the best, I design websites in a way I find them nice and easy to read. I hope you like it."
            githubLink="https://github.com/ciurkoj/refreshedWebiste"
            liveDemo="https://ciurkoj.github.io/refreshedWebiste"
            projectsImage={electricalDevice}
          ></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            projectsImage={bigDataProject}
            projectName="Big Data Project"
            projectSubtitle="A standalone app, generating maps from 49,000,000 points contained in NetCDF files. Developed with MATLAB App Designer."
            projectDescription="The project itself is an overdeveloped university task. The goal was just to visualise a big data files with a simple MATLAB script- no UI, no video exporting. As I developed, I have noticed its potential and simply implement new ideas. 
            Final product delivers an App in a script, as well as complete installer to install the app on Windows machines. With this App you can visualise data from 2 different sources, present it frame by frame with colour blindness adjustments and export a video in various resolution."
          ></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            projectName="Web Automation"
            projectSubtitle="An app build with Python frameworks Django and Selenium, deployed on Google Cloud Platform, styled with BootStrap."
            projectDescription="The idea is to mix Django with Selenium Web Driver to automate browser-based strategy game.
          I just want to transfer resources from town to town and the max capacity of single transport is too small, so as a player I need to log in a few times a day, which I find silly. There is better, free way to set a queue.[Update: Project is inactive due to costs of running.]"
            githubLink="https://github.com/jciurko/web_automation"
            liveDemo=""
            projectsImage={automation}
          ></Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card
            projectsImage={onlineStore}
            projectName="An online shop"
            projectSubtitle="This project is about REST API and its backcend implementation in Django, Python with frontend made in React."
            projectDescription="The projects started when a friend of mine aske me if I could make a website where he could collect orders from customers for his pizza place. I'm not experienced enough to deliver a fully functional online shop with payment gates, but then I realised, it could be a great project for my portfolio.
            A project, that combines 2 programming langueages and is hosted on Google Cloud Platform. I didn't know much about backend programming in Python and I had a little bit of experience in React. I started with some videos on YouTube, about a blog made in Django. It helped me to implement a user registration procedure and from now on a new user could register into my remote database on GCP. The next step was to add JavaScript to the project. I started with a simple UI with some dummy data, just to have a basic interface (homepage, user profile and different navbars for logged in users. When it's been done I realised I need to use Redux to connect backend with fronted.
            The final result was a website with simple CMS, where an admin could insert new offers onto homepage and new users could login and see their profiles.
            [Update: Project is inactive due to costs of running.]"
            githubLink="https://github.com/ciurkoj/shop"
            liveDemo=""
          ></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={6} md={4}>
          <Card
            projectsImage={portfolioV1}
            projectName="My portfolio project"
            projectSubtitle="A web developer needs a portfolio and this is how I started my journey with frontend pretty much not knowing nothing about React."
            projectDescription="This website may not be well designed but I'm just a junior developer 
            with only some experience in coding mixed with loads of will and persistence to become a full time software developer.
            To build this website I've tools such as: React with React Material Design Lite and basic pack of frontend languages: JavaScript, HTML5, CSS3. I keep this website to remind me where I've started."
          ></Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card
            projectName="ExchangeBay"
            projectSubtitle="The final product allows users to upload images, tracks transactions, 
            restores passwords through links sent to users on request."
            projectDescription="Basically, it is a very small and basic ebay.As team of 2nd year students we had to deliver a fully functional website.
          We had to keep the highest standard of project development, providing project documentation, unit and acceptance testing. 
          In the project we have used Node.js, Handlebars with Koa.js framework (newer Express.js) keeping the standard of ES6. 
          The project taught me a lot about working in a team, especially how to assing tasks, how to deal with delays 
          and how help others if they face a problem. For example we have used GitHub Project Issues to manage tasks previously discussed on MS Teams or What'sApp."
            projectsImage={exchange}
            githubLink="https://github.com/jciurko/ExchangeBay"
          ></Card>
        </Grid>
      </Grid>
    </Container>
  );
}
