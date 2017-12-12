import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { showModal } from '../../actions/ui_actions';

class FeedAddQuestionPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal() {
    this.props.showModal('askQuestion');
  }

  render() {
    const { currentUser } = this.props;
    let initials = '';
    if (currentUser) {
      initials = currentUser.firstName.charAt(0) + currentUser.lastName.charAt(0);
    }
    return (
      <div className="feed-add-question-prompt">
        <div className="feed-add-name-wrapper">
          <div className="comment-editor-header">
            {currentUser ? initials : null}
          </div>
          <div className="feed-add-name">
            {currentUser ? `${currentUser.firstName} ${currentUser.lastName}` : ''}
          </div>
        </div>
        <div className="feed-add-question">
          <div onClick={this.showModal} role="button">What is your question?</div>
        </div>
      </div>
    );
  }
}

FeedAddQuestionPrompt.propTypes = {
  currentUser: PropTypes.object.isRequired,
  showModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  showModal: formType => dispatch(showModal(formType)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedAddQuestionPrompt));
