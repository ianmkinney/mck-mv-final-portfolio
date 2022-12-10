import React from "react";
import { withAppContext } from "../AppContext";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

class EditNote extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.props
      .getNote(this.props.match.params.id)
      .then((response) => {
        this.setState({
          title: response.title,
          body: response.body,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clearInputs = () => {
    this.setState({
      title: "",
      body: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .editNote(this.props.match.params.id, this.state)
      .then((response) => {
        this.clearInputs();
        this.props.history.push("/notes");
      })
      .catch((err) => {
        this.setState({
          errorMessage: err.response.data.message,
        });
      });
  };

  render() {
    return (
      <div className="content-wrapper">
        <Container maxWidth="lg">
          <Typography
            className="titlePadding"
            align="left"
            style={{ marginBottom: 15 }}
            variant="h6"
          >
            Edit Note
          </Typography>
          <form onSubmit={this.handleSubmit}>
            <Box width="50%">
              <TextField
                id="outlined-full-width"
                label="Title"
                style={{ margin: 8, marginBottom: 15 }}
                name="title"
                value={this.state.title}
                onChange={this.handleChange}
                type="text"
                placeholder="title"
                fullWidth
                margin="normal"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Box width="85%">
              <TextField
                id="outlined-full-width"
                label="Entry"
                style={{ margin: 8, marginBottom: 15 }}
                name="body"
                value={this.state.body}
                onChange={this.handleChange}
                placeholder="Enter text"
                fullWidth
                margin="normal"
                variant="outlined"
                multiline
                rowsMax={4}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginLeft: 8 }}
            >
              Submit
            </Button>
          </form>
          <Typography color="error" variant="body1">
            {this.state.errorMessage}
          </Typography>
        </Container>
      </div>
    );
  }
}

export default withAppContext(EditNote);
