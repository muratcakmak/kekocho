import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }


  rawMarkup(rawMarkup){
        return { __html: rawMarkup };
    }

  render(){
    const answer = this.props.firstAnswer;
    return (
      <div className="question-box">
        <div className="question-item">
          <div className="question-topic">

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
