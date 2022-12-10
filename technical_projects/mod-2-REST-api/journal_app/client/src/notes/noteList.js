import React from "react";
import NoteForm from "./noteForm";
import Note from "./note";
import { withAppContext } from "../AppContext";
import { Container, Grid } from "@material-ui/core";

function NoteList(props) {
  const notes = props.notes.map((note) => {
    return (
      <Grid item xs={12} md={4} key={note._id}>
        <Note key={note._id} note={note} delete={props.deleteNote} />
      </Grid>
    );
  });
  return (
    <div className="content-wrapper">
      <div>
        <NoteForm addNote={props.addNote} />
      </div>
      <Container maxWidth="lg" component="main">
        <Grid
          container
          spacing={5}
          alignItems="flex-start"
          style={{ marginTop: 20 }}
        >
          {notes}
        </Grid>
      </Container>
    </div>
  );
}

export default withAppContext(NoteList);
