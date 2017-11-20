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
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
  }

  componentDidMount(){
    this.setState({
      answer_author_id: this.props.user.id,
      question_id: this.props.question_id,
      body: ""
    });
  }

  handleAnswer(e){
    e.preventDefault();
    this.props.createAnswer(this.state);
    this.setState({ body: "" });
    this.toggleAnswerComponent();
  }

  handleChange(html){
    this.setState({ body: html});
  }


  toggleAnswerComponent(){
    this.props.cancel();
  }


  render () {
    const user = this.props.user;
    return (
      <div className="answer-wrapper">
      <form className="answer-form" onSubmit={this.handleAnswer} >
        <div className="answer-header">
          <p>{user.firstName} {user.lastName}</p>
        </div>
        <div className="answer-body">
          <ReactQuill
            onChange={this.handleChange}
            placeholder="Write your answer"
            theme="snow"
            modules={AnswerEditor.modules}
            formats={AnswerEditor.formats}
            value={this.state.body}
            />
        </div>
        <div className="answer-footer">
          <button disabled={!this.state.body} className="session-submit-button answer-button">Submit</button>
          <a onClick={this.toggleAnswerComponent} style={{marginLeft: "10px"}} >Cancel</a>
        </div>
      </form>
      </div>
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
