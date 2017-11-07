import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';

class EditAnswerEditor extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      body: props.content,
      answer_author_id: "",
      question_id: "",
      id: props.answerId
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditorComponent = this.toggleEditorComponent.bind(this);
  }

  componentDidMount(){
    this.setState({
      answer_author_id: this.props.user.id,
      question_id: this.props.question_id
    });
  }

  handleAnswer(e){
    e.preventDefault();
    this.props.updateAnswer(this.state);
    this.toggleEditorComponent();
    this.setState({ body: "" });
  }

  handleChange(html){
    this.setState({ body: html});
  }


  toggleEditorComponent(){
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
          <ReactQuill onChange={this.handleChange}
                        theme="snow"
                        value={ this.state.body }
                        modules={EditAnswerEditor.modules}
                        formats={EditAnswerEditor.formats} />
        </div>
        <div className="answer-footer">
          <button type="submit" className="session-submit-button answer-button">Submit</button>
          <a onClick={this.toggleEditorComponent} style={{marginLeft: "10px"}} >Cancel</a>
        </div>
      </form>
      </div>
    );
  }
}

EditAnswerEditor.modules = {
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

EditAnswerEditor.formats = [
  'bold', 'italic', 'underline',
  'list', 'bullet',
  'link', 'image'
];

export default EditAnswerEditor;
