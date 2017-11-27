import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndexItem from './question_item_index';
import FeedAddQuestionPromptContainer from './feed_add_question_prompt_container';
import { compare } from '../../util/util';

class QuestionFeed extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      topicId: this.props.topicId,
    };
  }

  componentDidMount(){
    if(this.props.path.slice(0, 7) === "/topics"){
      this.props.requestTopicQuestions(this.props.topicId);
      this.setState({ topicId: this.props.topicId });
    }else{
      this.props.requestFeedData();
    }
  }

  componentWillReceiveProps(newProps){
    if(newProps.match.params.topicId !== this.state.topicId){
      this.props.requestTopicQuestions(this.props.topicId);
      this.setState({ topicId: this.props.topicId });
    }
  }

  render(){
    const questionIndexItems = [];
    const answers = this.props.answers;
    const path = this.props.path;
    Object.values(this.props.questions).sort(compare).map((question) => {
      const firstAnswer = answers[question.answerIds[0]];
      if(path === "/answers"){
        if(typeof firstAnswer === "undefined"){
          questionIndexItems.push(<QuestionIndexItem currentUser={this.props.currentUser} deleteQuestion={this.props.deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer}/>);
        }
      }else if (path.slice(0,7) === "/topics") {
        //topic
        questionIndexItems.push(<QuestionIndexItem currentUser={this.props.currentUser} deleteQuestion={this.props.deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer}/>);
      }else{
        questionIndexItems.push(<QuestionIndexItem currentUser={this.props.currentUser} deleteQuestion={this.props.deleteQuestion} key={question.id} question={question} firstAnswer={firstAnswer}/>);
      }
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
