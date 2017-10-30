import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class AnswerEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: "",
      answer_author_id: "",
      question_id: ""
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    
    this.setState({
      answer_author_id: this.props.user.id,
      question_id: this.props.question_id
    });
  }

  handleAnswer(e){
    e.preventDefault();
    this.props.createAnswer(this.state);
  }

  handleChange(html){
    this.setState({ body: html});
  }

  render () {
    return (
      <form className="answer-form" onSubmit={this.handleAnswer} >
        <div className="answer-header">
          <p>Username goes here</p>
        </div>
        <div className="answer-body">
          <ReactQuill onChange={this.handleChange} placeholder="Write your answer" style={{minHeight: 300, minWidth: 600}} theme="snow" modules={AnswerEditor.modules}formats={AnswerEditor.formats} />
        </div>
        <div className="answer-footer">
          <button className="session-submit-button answer-button">Post</button>
        </div>
      </form>
    );
  }
}

AnswerEditor.modules = {
  toolbar: [
    ['bold', 'italic'],
    [{'list': 'ordered'}, {'list': 'bullet'}],
    ['link', 'image'],
    ['clean']
  ],
  clipboard: {
    matchVisual: false,
  }
};

AnswerEditor.formats = [
  'bold', 'italic', 'underline',
  'list', 'bullet',
  'link', 'image'
];

export default AnswerEditor;
