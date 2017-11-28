import React from 'react';
import { Link } from 'react-router-dom';
import EditAnswerEditorContainer from '../edit-answer-editor/edit_answer_editor_container';
import CommentEditorContainer from '../comment_editor/comment_editor_container';
import CommentIndexItemContainer from '../question_show/comment_index_item_container';
import ReadMore from '../question_show/read_more';
import { compare } from '../../util/util';

class AnswerIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    let answerId = null;
    if(this.props.answer){
      answerId = this.props.answer.id;
    }
    const userId = this.props.userId;
    //Fix upvoted
    this.state = {
      editMode: false,
      showCommentEditor: false,
      showComments: false,
      upvoted: false,
      answerId: answerId,
      userId: userId,
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleComments = this.toggleComments.bind(this);
    this.toggleUpvote = this.toggleUpvote.bind(this);
  }

  componentDidMount(){

  }

  toggleUpvote(){
    debugger
  if(this.state.upvoted){
    debugger
    this.props.deleteUpvote({ userId: this.state.userId, answerId: this.state.answerId });
    this.setState({
      upvoted: false
    });
  }else{
    debugger
    this.props.createUpvote({ user_id: this.state.userId, answer_id: this.state.answerId });
    this.setState({
      upvoted: true
    });
  }
}

  componentWillReceiveProps(nextProps) {

  }

  toggleEditMode(){
    this.setState({ editMode: !this.state.editMode});
  }

  toggleComments(){
    this.setState({ showComments: !this.state.showComments });
  }

  deleteAnswer(){
    this.props.deleteAnswer(this.props.answer.id);
  }

  rawMarkup(rawMarkup){
    return { __html: rawMarkup };
  }

  updateAnswer(){
    this.props.updateAnswer(this.props.answer);
  }

  render(){
    const answer = this.props.answer;
    const initials = answer.authorName.split(" ").map((n)=>n[0]).join("");
    let comments = [];
    if(this.props.comments){
      comments = this.props.comments.sort(compare).map((comment) =>{
        return (
          <CommentIndexItemContainer key={comment.id} comment={ comment } />
        );
      });
    }
    if(!this.state.editMode){

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
            <button onClick={ this.toggleUpvote } className="upvote-button">Upvote | { this.props.upvotes > 0 ? this.props.upvotes : 0}</button>
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
              <CommentEditorContainer answerId={answer.id} cancel={ () => this.toggleComments() } show={this.state.showComments}/>
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
    else{
      return (
        <EditAnswerEditorContainer answerId={ answer.id } question_id={ answer.questionId } content={ answer.body } cancel={ () => this.toggleEditMode() }/>
      );
    }
  }



}

export default AnswerIndexItem;


// <CommentIndexItemContainer comment = { comment } currentUser={this.props.currentUser} />
