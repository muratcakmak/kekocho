import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndexItem from './question_item_index';
import FeedAddQuestionPromptContainer from './feed_add_question_prompt_container';

class QuestionFeed extends React.Component{

  componentDidMount(){
    this.props.requestFeedData();
  }
  render(){
    const questionIndexItems = [];
    debugger
    if(this.props.entities.hasOwnProperty("questions")){
      Object.values(this.props.entities.questions).map((question) => {
        questionIndexItems.push(<QuestionIndexItem key={question.id} question={question} firstAnswer={question.firstAnswer}/>);
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

export default QuestionFeed;
