import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SearchBar extends React.Component{
  render(){
    return (
      <textarea class="selector-input text" type="text" rows="1" autofocus="True" data-group="js-editable" placeholder="Search Quora" w2cid="ks8utXH" id="__w2_ks8utXH_input" style={{ overflowX: "hidden", wordWrap: "break-word", height: "29px" }}></textarea>
    );
  }
}

export default SearchBar;
