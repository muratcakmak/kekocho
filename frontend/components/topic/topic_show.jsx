import React from 'react';
import { Link } from 'react-router-dom';
class TopicShow extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestTopicQuestions(this.props.topicId);
  }


  render(){
    if(this.props.questions){
      const questionItems = this.props.questions.map((question) =>(
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
      ));
      return (<div className="qs-wrapper">
        <div className="qs-content">
          <section className="qs-content-sidebar">
          </section>
          <section className="qs-content-main" >
            <div className="topic-box">
              <h1>{this.props.topic.name}</h1>
            </div>
            <ul>
              {questionItems}
            </ul>
          </section>
        </div>
      </div>);
    }else{
      return null;
    }
  }
}

export default TopicShow;
