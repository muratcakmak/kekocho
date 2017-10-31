import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
    this.updateAnswer = this.updateAnswer.bind(this);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps) {

  }

  deleteAnswer(){
    debugger
    this.props.deleteAnswer(this.props.answer.id);
  }

  rawMarkup(rawMarkup){
    return { __html: rawMarkup };
  }

  updateAnswer(){
    debugger
    this.props.updateAnswer(this.props.answer);
  }

  render(){
      const answer = this.props.answer
      return (
        <div className="as-wrapper">
          <div className="as-header">
            <li>{answer.authorName}</li>
          </div>
          <div className="as-body">
            <li><span dangerouslySetInnerHTML={this.rawMarkup(answer.body)} /></li>
          </div>
          <div className="as-footer">
            { this.props.currentUser.id === answer.answerAuthorId ?
              <div>
                <a onClick={this.updateAnswer}>Edit Answer</a>
                <a onClick={this.deleteAnswer}>Delete Answer</a>
              </div>
               : null
             }
          </div>
        </div>
      );
    }
  }

  export default AnswerIndexItem;
