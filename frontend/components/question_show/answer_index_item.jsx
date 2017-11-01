import React from 'react';
import { Link } from 'react-router-dom';
import EditAnswerEditorContainer from '../edit-answer-editor/edit_answer_editor_container';
import CommentEditorContainer from '../comment_editor/comment_editor_container';
import CommentIndexItemContainer from '../question_show/comment_index_item_container';

class AnswerIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
    this.state = {
      editMode: false,
      showCommentEditor: false
    };
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps) {

  }

  toggleEditMode(){
    this.setState({ editMode: !this.state.editMode});
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
    let comments = [];
    if(this.props.comments){
      comments = this.props.comments.map((comment) =>{
        return (
          <CommentIndexItemContainer comment={ comment } />
        );
      });
    }
    if(!this.state.editMode){
      return (
        <div className="as-wrapper">
          <div className="as-header">
            <li>{answer.authorName}</li>
          </div>
          <div className="as-body">
            <li><span dangerouslySetInnerHTML={this.rawMarkup(answer.body)} /></li>
          </div>
          <div className="as-footer">
            { this.props.currentUser.id === answer.answerAuthorId ?
              <div>
                <a onClick={this.toggleEditMode}>Edit Answer</a>
                <a onClick={this.deleteAnswer}>Delete Answer</a>
              </div>
              : null
            }
          </div>
          <div>
            <CommentEditorContainer answerId={answer.id} cancel={ "" }/>
          </div>
          <ul>
            {
              comments
            }
          </ul>
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
