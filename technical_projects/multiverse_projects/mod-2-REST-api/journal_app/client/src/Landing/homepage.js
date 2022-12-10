import React from "react";
import { Link } from "react-router-dom";
import { Grid, makeStyles, Button, Typography } from "@material-ui/core";

import { withAppContext } from "../AppContext";

const useStyles = makeStyles({
  container: {
    padding: "100px 0px 0px",
    height: "100vh",
  },
  description: {
    textAlign: "center",
    maxWidth: "500px",
    margin: "0 auto",
  },
  landingImg: {
    objectFit: "contain",
    maxWidth: "100%",
    height: "auto",
    display: "block",
  },
});

const Homepage = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={2}
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Grid item md={1} />
      <Grid item xs={10} md={5} className={classes.description}>
        <Typography paragraph>
          Welcome to your journal!
        </Typography>
        {!props.token && (
          <Typography paragraph>
            <Button variant="contained" color="primary">
              <Link to="/signup">Sign Up Now</Link>
            </Button>
          </Typography>
        )}
      </Grid>
      <Grid item md={1} />
    </Grid>
  );
};

export default withAppContext(Homepage);
