import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchBar from './search_bar';
import { sendSearch } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return{
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendSearch: (query) => dispatch(sendSearch(query))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar));
