import React from 'react';
import { Link } from 'react-router-dom';
import AnswerEditor from '../editors/answer_editor';
import AnswerIndexItem from '../entity_show/answer_index_item';
import TopicHeader from '../feed/topic_header';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerEditor: false,
    };
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  toggleAnswerComponent() {
    this.setState({ showAnswerEditor: !this.state.showAnswerEditor });
  }

  deleteQuestion() {
    this.props.deleteQuestion(this.props.question.id);
  }

  rawMarkup(rawMarkup) {
    return { __html: rawMarkup };
  }

  render() {
    const answer = this.props.firstAnswer;
    const { question, currentUser } = this.props;
    return (
      <div className="question-box">
        <div className="question-item">
          <div className="question-topic">
            <li><div className="question-author">{question.authorName}</div></li>
          </div>
          <div className="question-body">
            <h2 id="question"><Link to={`/questions/${question.id}`}>{question.body}</Link></h2>
            { answer ?
              <AnswerIndexItem key={answer.id} answer={answer} currentUser={ currentUser} /> :
              <button onClick={this.toggleAnswerComponent} className="qs-answer-button"><span className="answer-icon"><img src={window.answerIcon} /></span> <span className="answer-label">Answer</span> </button>
              }
          </div>
          <footer className="question-footer">
            <ul className="question-footer-info">
              { answer ? answer.authorName : null }
            </ul>
          </footer>
        </div>
        <div className={this.state.showAnswerEditor ? 'qs-answer-editor' : 'hidden-signup'} >
          <AnswerEditor question_id={question.id} cancel={() => this.toggleAnswerComponent()} />
        </div>
      </div>);
  }
}


export default QuestionIndexItem;
