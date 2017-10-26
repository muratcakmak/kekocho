import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class NavBar extends React.Component{
  render(){
    return (
      <header className="header">
        <nav className="header-nav">
          <h1 className="header-logo">
            <a href="#">Kekocho</a>
          </h1>
          <GreetingContainer />

          <ul className="header-list">
            <li><a href="#">Home</a></li>
            <li><a href="#">Answer</a></li>
            <li><a href="#">Notifications</a></li>
          </ul>

          <div className="header-search-container">
            <input placeholder={"Search Kekocho"}></input>
          </div>
          <div className="header-question-button-container">
            <button className="header-question-button">Add Question</button>
          </div>

        </nav>
      </header>
    );
  }
}

export default NavBar;
