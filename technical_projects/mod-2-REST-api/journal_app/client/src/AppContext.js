import React from "react";
import axios from "axios";

// create an instance of axios to intercept http requests
const noteAxios = axios.create();

noteAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

// Create an instance of Context
const AppContext = React.createContext();

// Create Provider with  all the API calls
export class AppContextProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      notes: [],
      user: JSON.parse(localStorage.getItem("user")) || null,
      token: localStorage.getItem("token") || "",
    };
  }

  componentDidMount() {
    this.getNotes();
  }

  getNotes = () => {
    if (this.state.token !== "") {
      return noteAxios.get("/api/note").then((response) => {
        this.setState({ notes: response.data });
        return response;
      });
    }
  };

  addNote = (newNote) => {
    return noteAxios.post("/api/note", newNote).then((response) => {
      this.setState((prevState) => {
        return { notes: [...prevState.notes, response.data] };
      });
      console.log(response);
      return response;
    });
  };

  getNote = (noteId) => {
    return noteAxios.get(`/api/note/${noteId}`).then((response) => {
      console.log(response.data);
      return response.data;
    });
  };

  editNote = (noteId, note) => {
    return noteAxios.put(`/api/note/${noteId}`, note).then((response) => {
      this.setState((prevState) => {
        const updatedNotes = prevState.notes.map((note) => {
          return note._id === response.data._id ? response.data : note;
        });
        return { notes: updatedNotes };
      });
      return response;
    });
  };

  deleteNote = (noteId) => {
    return noteAxios.delete(`/api/note/${noteId}`).then((response) => {
      this.setState((prevState) => {
        const updatedNotes = prevState.notes.filter((note) => {
          return note._Id !== noteId;
        });
        return { notes: updatedNotes };
      });
      this.getNotes();
      return response;
    });
  };

  // create function to add tone analysis to each note

  // postTextForTone = (noteId) => {

  // }

  signup = (userData) => {
    return noteAxios.post("/auth/signup", userData).then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      this.setState({
        user,
        token,
      });
      return response;
    });
  };

  login = (userData) => {
    return noteAxios.post("/auth/login", userData).then((response) => {
      const { user, token } = response.data;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      this.setState({
        user,
        token,
      });
      this.getNotes();
      return response;
    });
  };

  logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    this.setState({
      notes: [],
      user: {},
      token: "",
    });
  };

  render() {
    return (
      <AppContext.Provider
        value={{
          getNotes: this.getNotes,
          getNote: this.getNote,
          addNote: this.addNote,
          editNote: this.editNote,
          deleteNote: this.deleteNote,
          signup: this.signup,
          login: this.login,
          logout: this.logout,
          ...this.state,
        }}
      >
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

// Create a Higher Order Component that
// returns the App Context consumer
// Code attributed to V School Context API tutorial
// Link: https://coursework.vschool.io/token-auth-with-jwts-part-2-react-context/

export function withAppContext(Component) {
  return function wrapperFunction(props) {
    return (
      <AppContext.Consumer>
        {(globalState) => {
          return <Component {...globalState} {...props} />;
        }}
      </AppContext.Consumer>
    );
  };
}
