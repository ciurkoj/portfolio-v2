import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import contemplativeReptile from "../../assets/img/contemplative-reptile.jpg";
import Modal from "../Modal/Modal";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();
  const [modal, setModal] = useState(false);
  const startCreateEventHandler = () => {
    setModal(true);
  };

  const modalConfirmHandler = () => {
    setModal(false);
  };

  const modalCancelHandler = () => {
    setModal(false);
  };
  return (
    <div>
      {modal && (
        <Modal onCancel={modalCancelHandler} onConfirm={modalConfirmHandler}>
          <h1>{props.projectName}</h1>
          <p>
            <h5>{props.projectSubtitle} </h5>
            <span>{props.projectDescription}</span>
          </p>
          <IconButton className={classes.buttonsSectionDesktop} color="inherit">
            Close
          </IconButton>
        </Modal>
      )}
      <Card
        className={classes.root}
        style={{
          marginBottom: "5rem",
          marginRight: "auto",
          marginLeft: "auto",
          height: "23em",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <CardActionArea>
          <CardMedia
            style={{ objectFit: "contain" }}
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={
              props.projectsImage ? props.projectsImage : contemplativeReptile
            }
            title="Contemplative Reptile"
          />
          <CardContent onClick={startCreateEventHandler}>
            <Typography gutterBottom variant="h5" component="h2">
              {props.projectName ? props.projectName : "Lizard"}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.projectSubtitle
                ? props.projectSubtitle
                : "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ position: "absolute", bottom: "0" }}>
          <Button
            size="small"
            color="primary "
            target="_blank"
            rel="noopener noreferrer"
            href={props.githubLink ? props.githubLink : ""}
          >
            Github
          </Button>
          <Button
            size="small"
            color="primary"
            target="_blank"
            rel="noopener noreferrer"
            href={props.liveDemo ? props.liveDemo : ""}
          >
            Live Demo
          </Button>

          <Button
            size="small"
            color="primary "
            target="_blank"
            rel="noopener noreferrer"
            href=""
          >
            CodePen
          </Button>
        </CardActions>
      </Card>{" "}
    </div>
  );
}
