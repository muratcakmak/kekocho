import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ResultIndexItem from './result_index_item';
import FeedAddQuestionPromptContainer from '../content/feed_add_question_prompt_container';

class SearchResult extends React.Component{

  render(){
    let questionIndexItems = [];
    if(this.props.questions){
      Object.values(this.props.questions).map((question) => {
        questionIndexItems.push(<li>{question.body}</li>);
      });
    }
    return (
      <section className="content-main">
        <FeedAddQuestionPromptContainer />
        <ul>
          {questionIndexItems}
        </ul>
      </section>
    );
  }
}

export default SearchResult;
