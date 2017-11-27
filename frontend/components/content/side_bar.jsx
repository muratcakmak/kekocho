import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SideBar extends React.Component{

  render(){
    const topicElements = this.props.topics.map((topic) => {
      return (
        <Link to={`/topics/${topic.id}`} className="sidebar-item" key={topic.id}> {topic.name} </Link>
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
