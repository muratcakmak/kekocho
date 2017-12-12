import React from 'react';
import PropTypes from 'prop-types';

const TopicHeader = ({ topic }) => (
  <div className="topic-header">
    <h1>{ topic }</h1>
  </div>
);

TopicHeader.propTypes = {
  topic: PropTypes.string,
};

TopicHeader.defaultProps = {
  topic: 'topic',
};

export default TopicHeader;
