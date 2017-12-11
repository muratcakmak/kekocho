import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { showModal } from '../../actions/ui_actions';

class QuestionButton extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.props.showModal();
  }

  render() {
    return (
      <div className="header-question-button-container">
          <button onClick={this.showModal} className="header-question-button">Add Question</button>
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  });

const mapDispatchToProps = (dispatch, ownProps) => ({
    showModal: (formType) => dispatch(showModal(formType))
  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionButton));
