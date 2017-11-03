import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class CommentEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: "",
      comment_author_id: "",
      answer_id: ""
    };
    this.handleComment = this.handleComment.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleShowComments = this.toggleShowComments.bind(this);
  }

  componentDidMount(){
    this.setState({
      body: "",
      comment_author_id: this.props.user.id,
      answer_id: this.props.answerId,
    });
  }

  handleComment(e){

    e.preventDefault();
    this.props.createComment(this.state).then(() => {
      if(!this.props.show){
        this.toggleShowComments();
      }
      this.setState({ body: "" });
    });
  }

  handleChange(html){
    this.setState({ body: html});
  }

  toggleShowComments(){
    this.props.cancel();
  }

  componentWillReceiveProps(){

  }

  render () {
    const user = this.props.user;

    const initials = user.userName.split(" ").map((n)=>n[0]).join("");

    return (
      <div className="answer-wrapper">
      <form className="comment-editor-form" onSubmit={this.handleComment} >
        <div className="comment-editor-header">
          {initials}
        </div>
        <div className="comment-editor-body">
          <ReactQuill
            onChange={this.handleChange}
            placeholder="Write your comment"
            theme={ null }
            width="320"
            value={ this.state.body }
            />
        </div>
        <div className="comment-editor-footer">
          <button className="session-submit-button answer-button">Comment</button>
          <a onClick={this.toggleShowComments} style={{marginLeft: "10px"}}>Show</a>
        </div>
      </form>
      </div>
    );
  }
}

CommentEditor.modules = {
  toolbar: [
  ],
  clipboard: {
    matchVisual: false,
  }
};

CommentEditor.formats = [

];

export default CommentEditor;
