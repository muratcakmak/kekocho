import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import SearchBarContainer from '../search_bar/search_bar_container';
import QuestionButton from './question_button';

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
            <SearchBarContainer />
          </div>
          <QuestionButton />
        </nav>
      </header>
    );
  }
}

export default NavBar;
