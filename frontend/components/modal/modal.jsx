import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AskQuestionFormContainer from './ask_question_form_container';


const Modal = (props) => {
  const { show } = props;
  if (show) {
    return (
      <div className="modal-wrapper">
        <AskQuestionFormContainer />
      </div>
    );
  }
  return null;
};

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  show: state.ui.modal.show,
});

const mapDispatchToProps = () => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Modal));
