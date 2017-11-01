import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AskQuestionFormContainer from './ask_question_form_container';

class Modal extends React.Component{

  render(){

    if(this.props.show){
      return (
        <div className={"modal-wrapper"}>
           <AskQuestionFormContainer />
        </div>
      );
    }
    return null;
  }
}

export default Modal;
