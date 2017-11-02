import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TopicShow from './topic_show';

const mapStateToProps = (state, ownProps) => {

  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicShow));
