import React from "react";
import { Link } from "react-router-dom";
import { withAppContext } from "../AppContext";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {
  Container,
  CssBaseline,
  Avatar,
  TextField,
  Button,
  Typography,
} from "@material-ui/core";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  clearInputs = () => {
    this.setState({
      username: "",
      password: "",
      errorMessage: "",
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props
      .signup(this.state)
      .then(() => {
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
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div>
            <Avatar className="lockStyle">
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" align="center">
              Register
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                onChange={this.handleChange}
                value={this.state.username}
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={this.handleChange}
                value={this.state.password}
                autoComplete="current-password"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
              >
                Sign Up
              </Button>
            </form>
            <Typography color="error" variant="body1">
              {this.state.errorMessage}
            </Typography>
            <Typography paragraph align="center" style={{ padding: "15px 0" }}>
              Already registered?{" "}
              <Link to="/login" style={{ color: "#001858" }}>
                Login Now
              </Link>
            </Typography>
          </div>
        </Container>
      </div>
    );
  }
}

export default withAppContext(Signup);
