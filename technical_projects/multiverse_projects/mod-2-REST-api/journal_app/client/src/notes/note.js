import React from "react";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ComputerIcon from "@material-ui/icons/Computer";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  CardActions,
  Button,
  Box,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  emotionBox: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
  },
  emotionSpan: {
    display: "inline-block",
    width: "10px",
    height: "10px",
    verticalAlign: "middle",
    marginRight: "4px",
  },
  emotionDescription: {
    marginRight: "8px",
  },
}));

function Note(props) {
  const classes = useStyles();
  const emotionColors = {
    anger: "#ff2400",
    fear: "#363636",
    joy: "#fce205",
    sadness: "#777B7e",
    confident: "#2e8b57",
    analytical: "#0e4c92",
    tentative: "#622a0f",
  };
  return (
    <Card>
      <CardHeader
        title={props.note.title}
        titleTypographyProps={{ align: "left" }}
        className="cardHeadStyle"
      />
      <CardContent>
        <div style={{ width: "12rem" }}>
          <Typography color="textPrimary" noWrap>
            {props.note.body}
          </Typography>
        </div>
      </CardContent>
      <CardActions className="cardHeadStyle">
        <Link
          to={"/read/" + props.note._id}
          style={{ color: "#fff", textDecoration: "none", paddingRight: 4 }}
        >
          <Button variant="contained" color="primary">
            <span style={{ marginRight: "4px" }}>Read</span>
            <ComputerIcon />
          </Button>
        </Link>
        <Link
          to={"/edit/" + props.note._id}
          style={{ color: "#fff", textDecoration: "none", paddingRight: 4 }}
        >
          <Button variant="contained" color="primary">
            <span>Edit</span>
            <EditIcon />
          </Button>
        </Link>

        <Button
          variant="contained"
          color="secondary"
          onClick={() => props.delete(props.note._id)}
        >
          <span>Delete</span>
          <DeleteIcon style={{ paddingleft: "5px" }} />
        </Button>
      </CardActions>
      <Box className={classes.emotionBox}>
        {props.note.tones.map((tone) => (
          <div key={tone._id}>
            <span
              className={classes.emotionSpan}
              style={{ backgroundColor: `${emotionColors[tone.tone_id]}` }}
            >
              {" "}
            </span>
            <span className={classes.emotionDescription}>{tone.tone_name}</span>
          </div>
        ))}
      </Box>
    </Card>
  );
}

export default Note;
