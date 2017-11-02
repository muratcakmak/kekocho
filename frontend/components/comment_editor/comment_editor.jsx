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
    this.props.createComment(this.state).then(() => this.toggleShowComments());
    this.setState({ body: "" });
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
      <form className="comment-form" onSubmit={this.handleComment} >
        <div className="comment-header">
          <h2>{initials}</h2>
        </div>
        <div className="comment-body">
          <ReactQuill
            onChange={this.handleChange}
            placeholder="Write your comment"
            theme={ null }
            width="320"
            />
        </div>
        <div className="comment-footer">
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
