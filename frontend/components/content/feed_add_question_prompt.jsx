import React from 'react';
import { Link } from 'react-router-dom';

class FeedAddQuestionPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
    this.props.showModal("askQuestion");
  }

  render(){

    return (
      <div className="feed-add-question-prompt">
        <div className="feed-add-name">
          {this.props.currentUser ? this.props.currentUser.firstName + " " + this.props.currentUser.lastName : ""}
        </div>
        <div className="feed-add-question">
          <div onClick={this.showModal}>What is your question?</div>
        </div>
      </div>
    );
    }
  }


  export default FeedAddQuestionPrompt;
