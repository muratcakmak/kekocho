import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionButton extends React.Component{
  render(){
    return (
        <div className="header-question-button-container">
            <button className="header-question-button">Add Question</button>
        </div>
    );
  }
}

export default QuestionButton;
