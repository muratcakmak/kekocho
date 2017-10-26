import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SearchBar extends React.Component{
  render(){
    return (
      <input placeholder={"Search Kekocho"}></input>
    );
  }
}

export default SearchBar;
