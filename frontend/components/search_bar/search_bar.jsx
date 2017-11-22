import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';
import Autosuggest from 'react-autosuggest';

class SearchBar extends React.Component{

  constructor(props){
    super(props);
    this.state = {
     value: '',
     suggestions: []
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.renderSuggestion = this.renderSuggestion.bind(this);
    this.getSuggestionValue = this.getSuggestionValue.bind(this);
    this.onChange = this.onChange.bind(this);

  }

  handleSearch(e) {
    e.preventDefault();
    this.props.sendSearch(this.state.value).then(
      (action) => {
        this.props.history.push(`/search`);
        this.setState({value: ""});
      }
    );
  }
  getSuggestionValue(suggestion) {
    return suggestion.body;
  }

  onSuggestionsFetchRequested({ value }){
    if(value.length > 2){
      $.ajax({
        method: "GET",
        url: `api/search/${value}`
      }).then((searchResult) => {
        console.log(searchResult);
        this.setState({
          suggestions: searchResult.Question
        });
      });
    }
  }

  onSuggestionsClearRequested (){
    this.setState({
      suggestions: []
    });
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value });
  }

  onChange (event, { newValue, method }){
    this.setState({
      value: newValue
    });
  }

  renderSuggestion(suggestion) {
    const body = suggestion.body;
    return (
      <h2>
        <Link to={`/questions/${suggestion.id}`}>{body}</Link>
        </h2>
    );
  }

  render(){
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: "Search Kekocho",
      value,
      onChange: this.onChange
    };
    return (
      <div className="nav-search-container">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps} />
    </div>


    );
  }
}

export default SearchBar;

// <textarea className="selector-input text" type="text" rows="1" autoFocus="True" data-group="js-editable" placeholder="Search Quora" w2cid="ks8utXH" id="__w2_ks8utXH_input" style={{ overflowX: "hidden", wordWrap: "break-word", height: "29px" }}></textarea>

// <input className="search-input" placeholder="search Quora"/>




// <form
//   className="nav-search"
//   onChange={this.handleChange('query')}
//   onSubmit={this.handleSearch}>
//   <input className="search-input" placeholder="Search Kekocho" value={this.state.query}/>
// </form>
