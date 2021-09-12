import React from 'react';
import './Navbar.css';
import  Searchbar  from './Searchbar';
import { Link } from "react-router-dom";


class NavBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {click: false, isLogged:false}
        this.state = {
          showAdminBoard: false,
          currentUser: undefined,
        };
     
    }
    handleClick = () => {
        this.setState({click: !this.state.click})
    }
    handleLogin = () => {
        this.setState({})
    }

    render(){
        const { currentUser, showAdminBoard } = this.state;
      
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                  <Link to={"/home"} className="nav-links">
                  vinylo
                  </Link>
                </h1>
                <div className="nav-menu">
                <Searchbar />      
                </div>          
                <div className="nav-menu">
              <li className="nav-item">
                <Link to={"/marketplace"} className="nav-links">
                      marketplace
                </Link>
              </li>
              </div>
              <div className="nav-menu">

                {showAdminBoard && (
                    <li className="nav-item">
                      <Link to={"/admin"} className="nav-links">
                       Admin Board
                      </Link>
                    </li>
                )}

                {currentUser && (
                  <li className="nav-item">
                    <Link to={"/user"} className="nav-links">
                      User
                    </Link>
                  </li>
                )}
              </div>
              
              
              {currentUser ? (
                <div className="nav-menu">
                  <li className="nav-item">
                    <Link to={"/profile"} className="nav-links">
                      {currentUser.username}
                    </Link>
                  </li>
                  <li className="nav-item">
                    <a href="/signin" className="nav-links" onClick={this.signout}>
                      <Link to={"/signout"} className="nav-links">
                      Signout
                    </Link>
                    </a>
                  </li>
                </div>
              ) : (
                <div className="nav-menu">
                  <li className="nav-item">
                    <Link to={"/signin"} className="nav-links">
                      sign in
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to={"/signup"} className="nav-links">
                      sign up
                    </Link>
                  </li>
                </div>
              )}
              
            </nav>
            
        )
    }
}
export default NavBar