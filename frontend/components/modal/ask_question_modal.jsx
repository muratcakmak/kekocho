import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';

class AskQuestionModal extends React.Component{
  // question_author_id: props.userId

  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);

    this.state = {
      body: "",
      question_author_id: this.props.user.id
    };
  }

  close(){
    this.props.removeAskQuestionModal();
  }

  handleQuestion(e){
    e.preventDefault();
    this.props.createQuestion(this.state);
    this.close();
  }


  update(field){
    return (e)=> this.setState( { [field]: e.target.value } );
  }

  render(){
    if(this.props.show){
      return (
        <div className={"modal-wrapper"}>
          <div className={"modal-content"}>
            <form className="modal-form" onSubmit={this.handleQuestion}>
              <div>
                <span onClick={this.close} className="model-close">&times;</span>
              </div>
              <div className="modal-header">
                {this.props.user.firstName + " " + this.props.user.lastName} added
                <Textarea style={{overflow:"hidden"}} maxRows={5} placeholder="What is your question?" onChange={this.update("body")} className="modal-textarea"></Textarea>
              </div>
              <div className="modal-footer">
                <a onClick={this.close}>Cancel</a>
                <button className="session-submit-button modal-button">Add Question</button>
              </div>
            </form>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default AskQuestionModal;
