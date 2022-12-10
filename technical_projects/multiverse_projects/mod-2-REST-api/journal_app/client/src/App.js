import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import { Header, Footer, Homepage } from "../src/Landing/index";
import { NoteList, EditNote, ReadNote } from "../src/notes/index";
import { Login, Signup, ProtectRoutes } from "../src/auth/index";

const useStyles = makeStyles({
  content: {
    backgroundColor: "#fef6e4",
  },
});

function App() {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.content}>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <ProtectRoutes path="/notes" component={NoteList} />
        <ProtectRoutes path="/edit/:id" component={EditNote} />
        <ProtectRoutes path="/read/:id" component={ReadNote} />
      </Switch>
    </Grid>
  );
}

export default App;
