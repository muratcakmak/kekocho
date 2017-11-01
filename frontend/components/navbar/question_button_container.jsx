import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { showModal } from '../../actions/ui_actions';
import QuestionButton from './question_button';

const mapStateToProps = (state, ownProps) => {

  return{
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    showModal: (formType) => dispatch(showModal(formType))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionButton));
