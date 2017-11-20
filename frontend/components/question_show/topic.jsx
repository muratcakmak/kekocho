import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { createTopic } from '../../actions/topic_actions';

class Topic extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      addTopic: false,
      topicName: "",
    };
    this.toggleInput = this.toggleInput.bind(this);
    this.myClickOutsideHandler = this.myClickOutsideHandler.bind(this);
    this.createTopic = this.createTopic.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleInput(){
    this.setState({addTopic: !this.state.addTopic});
  }
  myClickOutsideHandler(evt) {
    console.log(evt);
    this.setState({addTopic: false});
  }


  handleChange(e){
    this.setState({ topicName: e.target.value});
    console.log(this.state.topicName);
  }

  createTopic(e){
    e.preventDefault();
    console.log(this.state.topicName);
    this.props.createTopic({topic_name: this.state.topicName, question_id: this.props.question.id});
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
              <form onChange={this.handleChange} onSubmit={this.createTopic}>
                <input value={this.state.topicName} ></input>
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
    question: state.entities.questions[ownProps.match.params.questionId],
    topicIds : state.entities.questions[ownProps.match.params.questionId].topicIds,
    topics : state.entities.questions[ownProps.match.params.questionId].topics,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTopic: (topic) => dispatch(createTopic(topic))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Topic, clickOutsideConfig)));
