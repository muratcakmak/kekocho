import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class QuestionButton extends React.Component{
  constructor(props){
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
    this.props.addAskQuestionModal();
  }

  render(){
    return (
        <div className="header-question-button-container">
            <button onClick={this.showModal} className="header-question-button">Add Question</button>
        </div>
    );
  }
}

export default QuestionButton;
