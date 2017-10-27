import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionIndexItem from './question_item_index';

class QuestionFeed extends React.Component{

  componentDidMount(){
    this.props.requestQuestions();
  }
  render(){
    const questionItems = [];
    const questionIndexItems = [];
    if(this.props.entities.hasOwnProperty("questions")){
      // console.log(this.props.entities.questions);
      // Object.values(this.props.entities.questions).map((question) => (
      //   questionItems.push(<li>{question.body}</li>)
      // ));
      Object.values(this.props.entities.questions).map((question) => {

        questionIndexItems.push(<QuestionIndexItem key={question.id} question={question} firstAnswer={question.firstAnswer}/>);
      });
    }

    return (
      <section className="content-main">
        <h1>Question Feed</h1>
        <ul>
          {questionItems}
        </ul>
        <ul>
          {questionIndexItems}
        </ul>
      </section>
    );
  }
}

export default QuestionFeed;
