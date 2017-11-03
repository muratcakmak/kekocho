import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      query: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSearch(e) {
    e.preventDefault();
    this.props.sendSearch(this.state.query).then(
      (action) => {
        this.props.history.push(`/search`);
        this.setState({query: ""});
      }
    );
  }

  handleChange(field) {

    return (e) => this.setState({ [field]: e.target.value });
  }

  render(){
    return (
      <form
        className="nav-search"
        onChange={this.handleChange('query')}
        onSubmit={this.handleSearch}>
        <input className="search-input" placeholder="Search Quora" value={this.state.query}/>
      </form>


    );
  }
}

export default SearchBar;

// <textarea className="selector-input text" type="text" rows="1" autoFocus="True" data-group="js-editable" placeholder="Search Quora" w2cid="ks8utXH" id="__w2_ks8utXH_input" style={{ overflowX: "hidden", wordWrap: "break-word", height: "29px" }}></textarea>

// <input className="search-input" placeholder="search Quora"/>
