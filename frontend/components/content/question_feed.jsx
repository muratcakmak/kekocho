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
    const answers = this.props.answers;
    Object.values(this.props.questions).reverse().map((question) => {
      const firstAnswer = answers[question.answerIds[0]];
      questionIndexItems.push(<QuestionIndexItem currentUser={this.props.currentUser} deleteQuestion={this.props.deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer}/>);
    });

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
