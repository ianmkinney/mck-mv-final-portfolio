import React from "react";
import { withAppContext } from "../AppContext";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Menu,
  MenuItem,
  Paper,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkColor: {
    color: "#001858",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }
  function handleLogout() {
    handleClose();
    return props.logout();
  }

  return (
    <Grid item xs={12}>
      <Paper>
        <AppBar id="header">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/">Journal App</Link>
            </Typography>
            {!props.token ? (
              <React.Fragment>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="menu"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link className={classes.linkColor} to="signup">
                      Register
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link className={classes.linkColor} to="login">
                      Login
                    </Link>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleClick}
                  color="inherit"
                >
                  <AccountCircle />
                  <Typography variant="body1" style={{ paddingLeft: 8 }}>
                    Hi {props.user.username}
                  </Typography>
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  <MenuItem>
                    <Link to="/notes" className={classes.linkColor}>
                      Notes
                    </Link>
                  </MenuItem>
                </Menu>
              </React.Fragment>
            )}
          </Toolbar>
        </AppBar>
      </Paper>
    </Grid>
  );
};

export default withAppContext(Header);
