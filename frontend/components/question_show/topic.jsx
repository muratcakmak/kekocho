import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import onClickOutside from 'react-onclickoutside';

class Topic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      addTopic: false,
    };
    this.toggleInput = this.toggleInput.bind(this);
    this.myClickOutsideHandler = this.myClickOutsideHandler.bind(this);

  }

  toggleInput(){
    this.setState({addTopic: !this.state.addTopic});
  }
  myClickOutsideHandler(evt) {
    console.log(evt);
    this.setState({addTopic: false});
  }

  render(){
    const topics = this.props.topics;
    let topicLists = [];
    if(topics){
      Object.values(topics).map((topic)=> {
        topicLists.push(
          <li>{topic.name}</li>
        );
      });
      }
    return (
        <div>
          {
            topicLists ?
            topicLists :
            "Nothing to show"

          }

            {
              this.state.addTopic ?
              <form>
                <input></input>
              </form>
              :
              <button onClick={this.toggleInput} className="header-question-button">Add Topic</button>
            }
        </div>
    );
  }
}

var clickOutsideConfig = {
  handleClickOutside: function(instance) {
    return instance.myClickOutsideHandler;
  }
};

const mapStateToProps = (state, ownProps) => {
  return{
    topicIds : state.entities.questions[ownProps.match.params.questionId].topicIds,
    topics : state.entities.questions[ownProps.match.params.questionId].topics,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Topic, clickOutsideConfig)));
