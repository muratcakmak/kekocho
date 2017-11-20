import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerEditorContainer from '../answer_editor/answer_editor_container';
import AnswerIndexItemContainer from '../question_show/answer_index_item_container';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAnswerEditor: false
    };
    this.toggleAnswerComponent = this.toggleAnswerComponent.bind(this);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  toggleAnswerComponent(){
    this.setState({showAnswerEditor: !this.state.showAnswerEditor});
  }

  deleteQuestion(){
    this.props.deleteQuestion(this.props.question.id);
  }

  rawMarkup(rawMarkup){
        return { __html: rawMarkup };
    }

  render(){
    const answer = this.props.firstAnswer;

    const question = this.props.question;
      return (
        <div className="question-box">
          <div className="question-item">
            <div className="question-topic">
              <li><div className="question-author">{question.authorName}</div></li>
            </div>
            <div className="question-body">
              <h2><Link to={`/questions/${this.props.question.id}`}>{this.props.question.body}</Link></h2>
              { answer ?
                <AnswerIndexItemContainer key={answer.id} answer={answer} currentUser={this.props.currentUser} />:
                  <button onClick={ this.toggleAnswerComponent } className="qs-answer-button"> Answer </button>

              }
            </div>
            <footer className="question-footer">
              <ul className="question-footer-info">
                { answer ? answer.authorName : null }
              </ul>
            </footer>
          </div>
          <div className={ this.state.showAnswerEditor ? "qs-answer-editor" : "hidden-signup"} >
            <AnswerEditorContainer question_id={question.id} cancel={ () => this.toggleAnswerComponent() }/>
          </div>
        </div>);
    }
  }


  export default QuestionIndexItem;




  // <AnswerIndexItemContainer key={answer.id} answer={answer} currentUser={this.props.currentUser} />
  // <p>
  //   {answer ? <span dangerouslySetInnerHTML={this.rawMarkup(answer.body)} /> : null}
  // </p>
