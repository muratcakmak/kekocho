import React from 'react';
import { Link } from 'react-router-dom';

class AnswerIndexItem extends React.Component{
  constructor(props){
    super(props);
    this.rawMarkup = this.rawMarkup.bind(this);
  }

  componentDidMount(){

  }

  componentWillReceiveProps(nextProps) {

  }

  rawMarkup(rawMarkup){
    return { __html: rawMarkup };
  }

  render(){
      return (
        <div className="as-wrapper">
          <div className="as-header">
            <li>{this.props.author}</li>
          </div>
          <div className="as-body">
            <li><span dangerouslySetInnerHTML={this.rawMarkup(this.props.body)} /></li>
          </div>
        </div>
      );
    }
  }

  export default AnswerIndexItem;
