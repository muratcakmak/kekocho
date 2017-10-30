import React from 'react';
import { Link } from 'react-router-dom';
import AnswerEditorContainer from '../answer_editor/answer_editor_container';

class QuestionShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      answer_author_id: "",
      question_id: ""
    };
    this.showAnswerComponent = this.showAnswerComponent.bind(this);
  }

  componentDidMount(){
    const qid = this.props.match.params.questionId;
    this.props.fetchQuestion(qid);

  }

  componentWillReceiveProps(nextProps) {

    if(nextProps.match.params.questionId !== this.props.match.params.questionId){
      this.props.fetchQuestion(nextProps.match.params.questionId);
    }
  }

  showAnswerComponent(){

  }

  render(){
    const question = this.props.question;
    if (!question) {
      return <div>Loading...</div>;
      }
      return (
        <div className="qs-content">
          <section className="qs-content-main">
            <div className="qs-q-text">{question.body}</div>
            <h1>Asked by {this.props.user.firstName + " " + this.props.user.lastName } </h1>
            <button onClick={ this.showAnswerComponent }>Answer</button>

            <AnswerEditorContainer question_id={question.id} />

          </section>
          <section className="qs-content-sidebar">
            Sidebar
          </section>
        </div>
      );
    }
  }

  export default QuestionShow;
