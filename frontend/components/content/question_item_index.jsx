import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AnswerIndexItemContainer from '../question_show/answer_index_item_container';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);
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
                  null
              }
            </div>
            <footer className="question-footer">
              <ul className="question-footer-info">
                { answer ? answer.authorName : null }
              </ul>
            </footer>
          </div>
        </div>);
    }
  }


  export default QuestionIndexItem;




  // <AnswerIndexItemContainer key={answer.id} answer={answer} currentUser={this.props.currentUser} />
  // <p>
  //   {answer ? <span dangerouslySetInnerHTML={this.rawMarkup(answer.body)} /> : null}
  // </p>
