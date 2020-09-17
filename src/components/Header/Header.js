import React from "react";
import { Link } from "react-router-dom";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";
import theme1 from "../../assets/jss/headerStyle";
const useStyles = makeStyles(theme1);

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton color="inherit">
          <Link
            to="/portfolio-v2/resume-page"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            Resume
          </Link>
        </IconButton>
      </MenuItem>
      <MenuItem>
        <IconButton color="inherit">Projects</IconButton>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton color="inherit">Contact me</IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <Typography className={classes.title} xs={12}>
            <Link
              to="/portfolio-v2"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Jakub Ciurko
            </Link>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              className={classes.buttonsSectionDesktop}
              color="inherit"
            >
              <Link
                to="/portfolio-v2/resume-page"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                {" "}
                Resume
              </Link>
            </IconButton>
            <IconButton
              className={classes.buttonsSectionDesktop}
              color="inherit"
            >
              Projects
            </IconButton>
            <IconButton
              className={classes.buttonsSectionDesktop}
              color="inherit"
            >
              Contact me
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
