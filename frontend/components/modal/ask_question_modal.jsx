import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class AskQuestionModal extends React.Component{

  constructor(props){
    super(props);
    this.close = this.close.bind(this);
  }

  close(){
    this.props.removeAskQuestionModal();
  }


  render(){
    if(this.props.show){
      return (
        <div className={"modal"}>
          <div className={"modal-content"}>
            <span onClick={this.close} className="model-close">&times;</span>
            Question Modal
          </div>
        </div>
      );
    }
    return null;
  }
}

export default AskQuestionModal;
