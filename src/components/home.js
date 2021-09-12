import React, { Component } from "react";
import Album from "./album";
import UserService from "../services/user.service";
import AlbumTab from "./albumTab";
import './home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="big-logo">
          <h3><img src="vlo.png" alt="vinylo-logo" /></h3>
        </header>
        <div className="aboutus">
        <h2 >About us</h2>
        <h3>On vinylo you will find out about your favourite albums and marketplace from our users</h3>
        </div>
      </div>
    );
  }
}
export default Home