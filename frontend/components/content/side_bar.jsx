import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{

  render(){
    const topicElements = this.props.topics.map((topic) => {
      return (
        <li key={topic.id}>{topic.name}</li>
      );
    });
    return (
      <section className="content-sidebar">
        <h1>Feeds</h1>
        <ul>
          {topicElements}
        </ul>
      </section>
    );
  }
}

export default SideBar;
