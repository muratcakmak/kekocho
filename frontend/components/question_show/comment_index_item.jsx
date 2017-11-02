import React from 'react';
import { Link } from 'react-router-dom';
import EditAnswerEditorContainer from '../edit-answer-editor/edit_answer_editor_container';
import CommentEditorContainer from '../comment_editor/comment_editor_container';

class CommentIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.state = {
      editMode: false,
      showCommentEditor: false
    };
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps) {

  }



  deleteComment(){

    this.props.deleteComment(this.props.comment.id);
  }

  rawMarkup(rawMarkup){
    return { __html: rawMarkup };
  }

  render(){
    const comment = this.props.comment;
    debugger
    return (
      <div className="as-wrapper">
        <div className="as-header">
          <li>{comment.authorName}</li>
          <a onClick={this.deleteComment}>Delete Comment</a>
        </div>
        <div className="as-body">
          <li><span dangerouslySetInnerHTML={this.rawMarkup(comment.body)} /></li>
        </div>
        <div>
          <a onClick={this.deleteComment}>Delete Comment</a>
        </div>
      </div>
    );
  }
}

export default CommentIndexItem;
