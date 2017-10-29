import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
    render(){
    const answer = this.props.firstAnswer;
    return (<div className="posts">
      <article className="post">
          <div className="post-body">
            <h2><Link to={`/api/questions/${this.props.question.id}`}>{this.props.question.body}</Link></h2>
            <p>
              {answer ? answer.body : ""}
            </p>
            <footer className="post-footer">
              <ul className="post-footer-info">
                <li><a href="#">Answerer Name</a></li>
              </ul>
            </footer>
          </div>
        </article>
      </div>);
    }
  }


  export default QuestionIndexItem;
