import { connect } from 'react-redux';
import AnswerEditor from './answer_editor';
import { withRouter } from 'react-router';

const mapStateToProps = (state, ownProps) => {
  return{
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AnswerEditor));
