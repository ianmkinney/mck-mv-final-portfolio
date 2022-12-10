import React, { Component } from "react";
import { withAppContext } from "../AppContext";
import { Container, Typography, Box } from "@material-ui/core";

class ReadNote extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      body: "",
    };
  }
  componentDidMount() {
    this.props
      .getNote(this.props.match.params.id)
      .then((res) => {
        this.setState({
          title: res.title,
          body: res.body,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }
  render() {
    const { title, body } = this.state;
    return (
      <div>
        <Container maxWidth="lg" style={{ marginTop: "100px" }}>
          <Container maxWidth="md">
            <Box>
              <Typography variant="h4" color="primary" gutterBottom>
                {title}
              </Typography>
            </Box>
            <Box>
              <Typography
                style={{
                  textDecoration: "underline",
                  textDecorationColor: "#f582ae",
                  whiteSpace: "pre-line",
                }}
              >
                {body}
              </Typography>
            </Box>
          </Container>
        </Container>
      </div>
    );
  }
}

export default withAppContext(ReadNote);
