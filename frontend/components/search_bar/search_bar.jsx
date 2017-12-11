import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { sendSearch } from '../../actions/search_actions';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: [],
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
    this.props.sendSearch(this.state.value).then((action) => {
      this.props.history.push('/search');
      this.setState({ value: '' });
    });
  }
  getSuggestionValue(suggestion) {
    return suggestion.body;
  }

  onSuggestionsFetchRequested({ value }) {
    if (value.length > 2) {
      $.ajax({
        method: 'GET',
        url: `api/search/${value}`,
      }).then((searchResult) => {
        this.setState({
          suggestions: searchResult.Question,
        });
      });
    }
  }

  onSuggestionsClearRequested() {
    this.setState({
      suggestions: [],
    });
  }

  handleChange(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  onChange(event, { newValue, method }) {
    this.setState({
      value: newValue,
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

  render() {
    const { value, suggestions } = this.state;
    const inputProps = {
      placeholder: 'Search Kekocho',
      value,
      onChange: this.onChange,
    };
    return (
      <div className="nav-search-container">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      </div>


    );
  }
}

const mapStateToProps = (state, ownProps) => ({
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendSearch: query => dispatch(sendSearch(query)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchBar));

