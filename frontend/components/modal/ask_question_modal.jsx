import React from 'react';
import { Link, withRouter } from 'react-router-dom';

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
            <div>
              <span onClick={this.close} className="model-close">&times;</span>
            </div>
            <div>
              {this.props.user.email} asks
            </div>
            <form className="modal-form" onSubmit={this.handleQuestion}>
              <div className="modal-header">
                <textarea placeholder="Ask a question?" onChange={this.update("body")} className="modal-textarea"></textarea>
              </div>
              <div className="modal-footer">
                <button className="session-submit-button modal-button">Post</button>
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
