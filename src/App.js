import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import AuthService from "./services/auth.service";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import Profile from "./components/profile";
import Signin from "./components/signin";
import Signup from "./components/signup";
import AlbumTab from "./components/albumTab";
import Marketplace from "./components/marketplace";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);

    this.state = {
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }

  signout() {
    AuthService.signout();
  }

  render() {
    const { currentUser, showAdminBoard } = this.state;

    return (
      <div className="App">
        <Navbar />   
             
        <div>
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/items" component={Marketplace} />
            <Route exact path="/signin" component={Signin}/>
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/album/:id" component={AlbumTab} />
          </Switch>
        </div>
      </div>
      
    );
  }
}

export default App;