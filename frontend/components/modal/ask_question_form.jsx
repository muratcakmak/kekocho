import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Textarea from 'react-textarea-autosize';
import onClickOutside from 'react-onclickoutside';
import merge from 'lodash/merge';

class AskQuestionForm extends React.Component{

  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.state = {
      body: "",
      question_author_id: this.props.user.id,
    };
    this.myClickOutsideHandler = this.myClickOutsideHandler.bind(this);
  }

  componentDidMount(){

    if (this.props.formType === "edit"){
      this.setState({ body: this.props.question.body });
    }
  }

  componentWillReceiveProps(newProps){

    if(this.props.question && (this.props.question.body !== newProps.question.body)){
      this.setState({ body: newProps.question.body });
    }
  }

  myClickOutsideHandler(evt) {
    this.close();
  }

  close(){
    this.props.hideModal();
  }

  handleQuestion(e){
    e.preventDefault();

    if (this.props.formType === "edit"){
      this.props.updateQuestion(merge({}, this.state, { id: this.props.question.id }));
    }else{
      this.props.createQuestion(this.state);
    }

    this.close();
  }


  update(field){
    return (e)=> this.setState( { [field]: e.target.value } );
  }

  render(){

    if(this.props.show){
      return (

        <div className={"modal-content"}>
          <form className="modal-form" onSubmit={this.handleQuestion}>
            <div>
              <span onClick={this.close} className="model-close">&times;</span>
            </div>
            <div className="modal-header">
              {this.props.user.firstName + " " + this.props.user.lastName} added
              <Textarea value={ this.state.body } style={{overflow:"hidden"}} maxRows={5} placeholder="What is your question?" onChange={this.update("body")} className="modal-textarea"></Textarea>
            </div>
            <div className="modal-footer">
              <a onClick={this.close}>Cancel</a>
              <button className="session-submit-button modal-button">
                {
                  this.props.formType === "edit" ?
                   "Edit Question" : "Add Question"
                }
              </button>
            </div>
          </form>
        </div>
      );
    }
    return null;
  }
}


var clickOutsideConfig = {
  handleClickOutside: function(instance) {
    return instance.myClickOutsideHandler;
  }
};

export default onClickOutside(AskQuestionForm, clickOutsideConfig);
