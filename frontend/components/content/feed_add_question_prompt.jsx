import React from 'react';
import { Link } from 'react-router-dom';

class FeedAddQuestionPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
    console.log("Show modal");
    this.props.addAskQuestionModal();
  }

  render(){

    return (
      <div className="feed-add-question-prompt">
        <div>
          {this.props.currentUser ? this.props.currentUser.firstName + " " + this.props.currentUser.lastName : ""}
        </div>
        <div>
          <div onClick={this.showModal}>What is your question?</div>
        </div>
      </div>
    );
    }
  }


  export default FeedAddQuestionPrompt;
