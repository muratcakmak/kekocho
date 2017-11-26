import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndexItem from './question_item_index';
import FeedAddQuestionPromptContainer from './feed_add_question_prompt_container';
import { compare } from '../../util/util'
class QuestionFeed extends React.Component{

  componentDidMount(){
    this.props.requestFeedData();
  }
  render(){
    const questionIndexItems = [];
    const answers = this.props.answers;
    const path = this.props.path;
    debugger
    Object.values(this.props.questions).sort(compare).map((question) => {
      const firstAnswer = answers[question.answerIds[0]];
      if(path === "/answers"){
        if(typeof firstAnswer === "undefined"){
          questionIndexItems.push(<QuestionIndexItem currentUser={this.props.currentUser} deleteQuestion={this.props.deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer}/>);
        }
      }else{
        questionIndexItems.push(<QuestionIndexItem currentUser={this.props.currentUser} deleteQuestion={this.props.deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer}/>);
      }
    });

    debugger

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
