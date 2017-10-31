import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  deleteQuestion(){
    debugger
    this.props.deleteQuestion(this.props.question.id);
  }

  rawMarkup(rawMarkup){
        return { __html: rawMarkup };
    }

  render(){
    const answer = this.props.firstAnswer;
    const question = this.props.question;
    debugger
      return (
        <div className="question-box">
          <div className="question-item">
            <div className="question-topic">
              { question && this.props.currentUser.id === question.questionAuthorId?
                <button onClick={this.deleteQuestion}>Delete</button>:
                                  null}
            </div>
            <div className="question-body">
              <h2><Link to={`/api/questions/${this.props.question.id}`}>{this.props.question.body}</Link></h2>
              <p>
                {answer ? <span dangerouslySetInnerHTML={this.rawMarkup(answer.body)} /> : null}
              </p>
            </div>
            <footer className="question-footer">
              <ul className="question-footer-info">
                <li><a href="#">Answerer Name</a></li>

              </ul>
            </footer>
          </div>
        </div>);
    }
  }


  export default QuestionIndexItem;
