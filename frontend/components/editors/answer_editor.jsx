import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import { connect } from 'react-redux';
import { createAnswer } from '../../actions/answer_actions';

class AnswerEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      answer_author_id: '',
      question_id: '',
    };
    this.handleAnswer = this.handleAnswer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
  }

  componentDidMount() {
    this.setState({
      answer_author_id: this.props.user.id,
      question_id: this.props.question_id,
      body: '',
    });
  }

  handleAnswer(e) {
    e.preventDefault();
    this.props.createAnswer(this.state);
    this.setState({ body: '' });
    this.toggleAnswerComponent();
  }

  handleChange(html) {
    if (html === '<p><br></p>') {
      this.setState({ body: '' });
    } else {
      this.setState({ body: html });
    }
  }


  toggleAnswerComponent() {
    this.props.cancel();
  }


  render() {
    const user = this.props.user;
    const initials = user.userName.split(' ').map(n => n[0]).join('');
    return (
      <div className="answer-wrapper">
        <form className="answer-form" onSubmit={this.handleAnswer} >
        <div className="answer-header">
          <div className="comment-editor-header">
            {initials}
          </div>
          <p className="answer-header-username">{user.firstName} {user.lastName}</p>
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
          <a onClick={this.toggleAnswerComponent} style={{ marginLeft: '10px' }} >Cancel</a>
        </div>
      </form>
      </div>
    );
  }
}

AnswerEditor.modules = {
  toolbar: [
    ['bold', 'italic'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['link', 'image'],
    ['clean'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

AnswerEditor.formats = [
  'bold', 'italic', 'underline',
  'list', 'bullet',
  'link', 'image',
];


const mapStateToProps = (state, ownProps) => ({
    question_id: ownProps.question_id,
    user: state.session.currentUser
  });

const mapDispatchToProps = (dispatch, ownProps) => ({
    createAnswer: (answer) => dispatch(createAnswer(answer))
  });

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(AnswerEditor));

