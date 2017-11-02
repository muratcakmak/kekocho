import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SearchResult from './search_result';
import { sendSearch } from '../../actions/search_actions';

const mapStateToProps = (state, ownProps) => {
  return{
    questions: state.search
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult));
