import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const SideBar = (props) => {
  const topicElements = props.topics.map(topic => (
    <Link to={`/topics/${topic.id}`} className="sidebar-item" key={topic.id}> {topic.name} </Link>
  ));
  return (
    <section className="content-sidebar">
      <h3 className="title" >Feeds</h3>
      <ul>
        {topicElements}
      </ul>
    </section>
  );
};

const mapStateToProps = state => ({
  topics: Object.values(state.entities.userTopics),
});

const mapDispatchToProps = () => ({

});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar));
