import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compare } from '../../util/util';
import EditAnswerEditor from '../editors/edit_answer_editor';
import CommentEditorContainer from '../editors/comment_editor';
import CommentIndexItem from '../entity_show/comment_index_item';
import ReadMore from '../entity_show/read_more';
import { deleteAnswer, updateAnswer } from '../../actions/answer_actions';
import { createUpvote, deleteUpvote } from '../../actions/upvote_actions';

class AnswerIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    let answerId = null;
    if (this.props.answer) {
      answerId = this.props.answer.id;
    }
    const userId = this.props.user.id;
    const upvoted = this.props.user.upvotes.includes(this.props.answer.id);
    // Fix upvoted
    this.state = {
      editMode: false,
      showCommentEditor: false,
      showComments: false,
      upvoted,
      answerId,
      userId,
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
    this.toggleUpvote = this.toggleUpvote.bind(this);
  }

  componentDidMount() {

  }

  toggleUpvote() {
    if (this.state.upvoted) {
      this.props.deleteUpvote({ userId: this.state.userId, answerId: this.state.answerId });
      this.setState({
        upvoted: false,
      });
    } else {
      this.props.createUpvote({ user_id: this.state.userId, answer_id: this.state.answerId });
      this.setState({
        upvoted: true,
      });
    }
  }

  componentWillReceiveProps(nextProps) {

  }

  toggleEditMode() {
    this.setState({ editMode: !this.state.editMode });
  }

  toggleComments() {
    this.setState({ showComments: !this.state.showComments });
  }

  deleteAnswer() {
    this.props.deleteAnswer(this.props.answer.id);
  }

  rawMarkup(rawMarkup) {
    return { __html: rawMarkup };
  }

  updateAnswer() {
    this.props.updateAnswer(this.props.answer);
  }

  render() {
    const answer = this.props.answer;
    const initials = answer.authorName.split(' ').map(n => n[0]).join('');
    let comments = [];
    if (this.props.comments) {
      comments = this.props.comments.sort(compare).map(comment => (
        <CommentIndexItem key={comment.id} comment={comment} />
      ));
    }
    if (!this.state.editMode) {
      return (
        <div className="answer-comment-wrapper">

          <div className="as-wrapper">
            <div className="as-header">
              <div className="as-profile-pic">
                <div className="as-initials-large">{initials}</div>
              </div>
              <div className="as-name-date">
                <div className="author-name">{answer.authorName}</div>
                <li>{answer.date}</li>
              </div>
            </div>
            <div className="as-content-holder">
              <div className="as-body">
                <li>
                <ReadMore>
                  {answer.body}
                </ReadMore>
              </li>
              </div>
              <button onClick={this.toggleUpvote} className="upvote-button">{ this.props.user.upvotes.includes(answer.id) ? 'Downvote' : 'Upvote' } | { answer.upvotes }</button>
              <div className="as-footer">
                { this.props.currentUser.id === answer.answerAuthorId ?
                <div className="as-footer-button">
                  <a onClick={this.toggleEditMode}>Edit Answer</a>
                  <a onClick={this.deleteAnswer}>Delete Answer</a>
                </div>
                : null
              }
              </div>
            </div>
          </div>
          <div>
            <div>
              <CommentEditorContainer answerId={answer.id} cancel={() => this.toggleComments()} show={this.state.showComments} />
            </div>
            {
              this.state.showComments ?
                <ul>
                  {
                  comments
                }
                </ul> : null
            }
          </div>
        </div>
      );
    }

    return (
      <EditAnswerEditor answerId={answer.id} question_id={answer.questionId} content={answer.body} cancel={() => this.toggleEditMode()} />
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  const answers = state.entities.answers[ownProps.answer.id];
  if (answers && answers.commentIds.length > 0) {
    return {
      comments: state.entities.answers[ownProps.answer.id].commentIds.map(id => state.entities.comments[id]),
      user: state.session.currentUser,
    };
  }
  return {
    user: state.session.currentUser,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteAnswer: answerId => dispatch(deleteAnswer(answerId)),
  updateAnswer: answer => dispatch(updateAnswer(answer)),
  deleteUpvote: upvote => dispatch(deleteUpvote(upvote)),
  createUpvote: upvote => dispatch(createUpvote(upvote)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnswerIndexItem));

