import React from 'react';
import { Link } from 'react-router-dom';

class FeedAddQuestionPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
  }

  showModal(){
    console.log("Show modal");
  }

  render(){
    debugger
    return (
      <div className="feed_add_question_prompt">
        <div>
          {this.props.currentUser ? this.props.currentUser.email : ""}
        </div>
        <div>
          <div onClick={this.showModal}>What is your question?</div>
        </div>
      </div>
    );
    }
  }


  export default FeedAddQuestionPrompt;
