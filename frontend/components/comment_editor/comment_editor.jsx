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
    this.props.createComment(this.state);
    this.setState({ body: "" });
  }

  handleChange(html){
    this.setState({ body: html});
  }

  render () {
    const user = this.props.user;
    return (
      <div className="answer-wrapper">
      <form className="answer-form" onSubmit={this.handleComment} >
        <div className="answer-header">
          <p>{user.firstName} {user.lastName}</p>
        </div>
        <div className="answer-body">
          <ReactQuill
            onChange={this.handleChange}
            placeholder="Write your comment"
            theme={ null }
            width="320"
            />
        </div>
        <div className="answer-footer">
          <button className="session-submit-button answer-button">Submit</button>
          <a onClick={this.toggleCommentComponent} style={{marginLeft: "10px"}} >Cancel</a>
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
