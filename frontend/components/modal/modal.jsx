import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AskQuestionFormContainer from './ask_question_form_container';
import { connect } from 'react-redux';
import { hideModal } from '../../actions/ui_actions';
import { createQuestion } from '../../actions/question_actions';

class Modal extends React.Component {
  render() {
    if (this.props.show) {
      return (
        <div className="modal-wrapper">
          <AskQuestionFormContainer />
        </div>
      );
    }
    return null;
  }
}

const mapStateToProps = (state, ownProps) => ({
    show: state.ui.modal.show,
  });

const mapDispatchToProps = (dispatch, ownProps) => ({

  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal));
