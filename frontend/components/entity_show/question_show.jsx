import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import AnswerEditor from '../editors/answer_editor';
import AnswerIndexItem from './answer_index_item';
import { compare } from '../../util/util';
import Topic from './topic';
import { deleteQuestion, fetchQuestion } from '../../actions/question_actions';
import { createAnswer } from '../../actions/answer_actions';
import { showModal } from '../../actions/ui_actions';

class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer_author_id: '',
      question_id: '',
      showAnswerEditor: false,
    };
    this.openEditModal = this.openEditModal.bind(this);
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    // $('html, body').scrollTop(0);
    const qid = this.props.match.params.questionId;
    this.props.fetchQuestion(qid).then(question => this.setState({ question_id: question.id }));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.questionId !== this.props.match.params.questionId) {
      this.props.fetchQuestion(nextProps.match.params.questionId);
    }
  }

  toggleAnswerComponent() {
    this.setState({ showAnswerEditor: !this.state.showAnswerEditor });
  }

  openEditModal() {
    this.props.showModal('edit', this.props.question.id);
  }

  deleteQuestion() {
    // It needs to wait until promise returns, it is hotfix
    this.props.deleteQuestion(this.props.question.id).then(() => {});
    this.props.history.push('/');
  }
  render() {
    const question = this.props.question;
    if (!question) {
      return <div>Loading...</div>;
    }

    // TODO: fix
    let answers = [];

    if (this.props.answers) {
      answers = this.props.answers.sort(compare).map(answer => (
        <AnswerIndexItem key={answer.id} answer={answer} currentUser={this.props.currentUser} />
      ));
    }
    return (
      <div className="qs-wrapper">
            <div className="qs-content">
              <section className="qs-content-main">
                <div>
                  <Topic />
                </div>
                <div className="qs-q-text">{question.body}</div>
                <div className="qs-ask">Asked by {question.authorName} </div>
                <div className="qs-button-wrapper">
                  <button onClick={this.toggleAnswerComponent} className="qs-answer-button"><span className="answer-icon"><img src={window.answerIcon} /></span> <span className="answer-label">Answer</span> </button>
                  {question.questionAuthorId === this.props.currentUser.id ?
                    <div className="header-question-button-container">
                      <a onClick={this.openEditModal} className="qs-edit">Edit Question</a>
                      <a onClick={this.deleteQuestion} className="qs-delete">Delete Question</a>
                    </div> :
                    null
                  }
                </div>
                <div className={this.state.showAnswerEditor ? '' : 'hidden-signup'}>
                  <AnswerEditor question_id={question.id} cancel={() => this.toggleAnswerComponent()} />
                </div>

                <div className="qs-answer-number">
                  {answers.length} {answers.length <= 1 ? 'Answer' : 'Answers'} {}
                </div>
                <ul>
                  { answers }
                </ul>
              </section>
              <section className="qs-content-sidebar" />
            </div>
          </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  if (Object.keys(state.entities.questions).length !== 0) {
    return {
      answers: state.entities.questions[ownProps.match.params.questionId].answerIds.map(id => state.entities.answers[id]),
      currentUser: state.session.currentUser,
      question: state.entities.questions[ownProps.match.params.questionId],
    };
  }
  return {
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchQuestion: questionId => dispatch(fetchQuestion(questionId)),
  createAnswer: answer => dispatch(createAnswer(answer)),
  showModal: (formType, questionId) => dispatch(showModal(formType, questionId)),
  deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(QuestionShow));
