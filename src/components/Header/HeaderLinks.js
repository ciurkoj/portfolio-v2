/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import Button from "@material-ui/core/Button";
// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import styles from "../../assets/jss/headerLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List>
      <ListItem> number 1</ListItem>
      <ListItem>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar"
          color="transparent"
          target="_blank"
        >
          <CloudDownload /> Download
        </Button>
      </ListItem>
      <ListItem>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
          >
            <i />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
          >
            <i />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
          >
            <i />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
