import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{

  render(){
    const topicElements = this.props.topics.map((topic) => {
      return (
        <li className="sidebar-item"key={topic.id}>{topic.name}</li>
      );
    });
    return (
      <section className="content-sidebar">
        <h3 className="title" >Feeds</h3>
        <ul>
          {topicElements}
        </ul>
      </section>
    );
  }
}

export default SideBar;
