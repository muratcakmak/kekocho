import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import React from 'react';
import onClickOutside from 'react-onclickoutside';
import { createTopic, deleteTopic } from '../../actions/topic_actions';

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
    this.deleteTopic = this.deleteTopic.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleInput(){
    this.setState({addTopic: !this.state.addTopic});
  }
  myClickOutsideHandler(evt) {
    this.setState({addTopic: false});
  }

  deleteTopic(topicId){
    const questionId = this.props.question.id;
    return () => {
      return this.props.deleteTopic({ topicId, questionId });
    };
  }

  handleChange(e){
    this.setState({ topicName: e.target.value});
  }

  createTopic(e){
    e.preventDefault();
    this.props.createTopic({topic_name: this.state.topicName, question_id: this.props.question.id});
  }

  render(){
    const topics = this.props.topics;
    const topicIds = this.props.topicIds;
    let topicLists = [];
    if(topicIds.length > 0){
      topicIds.map((topicId)=> {
        const topic = topics[topicId];

        topicLists.push(
          <li key={topic.id} className="topic-item">{topic.name}<span><a onClick={this.deleteTopic(topic.id)} className="close-btn">X</a></span></li>
        );
      });
      }
    return (
        <div className="topic-wrapper">
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
              <button onClick={ this.toggleInput } className="topic-button"><span className="answer-icon"><img src={window.answerIcon}></img></span> <span className="answer-label">Add Topic</span> </button>
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
    topics : state.entities.topics ? state.entities.topics : state.entities.questions[ownProps.match.params.questionId].topics,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createTopic: (topic) => dispatch(createTopic(topic)),
    deleteTopic: (topicId) => dispatch(deleteTopic(topicId)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(onClickOutside(Topic, clickOutsideConfig)));
