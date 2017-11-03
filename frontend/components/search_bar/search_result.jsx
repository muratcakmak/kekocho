import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ResultIndexItem from './result_index_item';
import FeedAddQuestionPromptContainer from '../content/feed_add_question_prompt_container';

class SearchResult extends React.Component{

  render(){

    let questionIndexItems = [];

    if(this.props.questions){
      Object.values(this.props.questions).map((question) => {
        questionIndexItems.push(
          <div className="question-box">
            <div className="question-item">
              <div className="question-topic">
              </div>
              <div className="question-body">
                <h2><Link to={`/questions/${question.id}`}>{question.body}</Link></h2>
              </div>
              <footer className="question-footer">
                <ul className="question-footer-info">
                </ul>
              </footer>
            </div>
          </div>
        );
      });
    }
    return (
      <div className="qs-wrapper">
        <div className="qs-content">
          <section className="qs-content-sidebar">
          </section>
          <section className="qs-content-main" >
            <ul>
              {questionIndexItems}
            </ul>
          </section>
        </div>
      </div>
    );
  }
}


export default SearchResult;
