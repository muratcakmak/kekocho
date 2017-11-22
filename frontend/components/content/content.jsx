import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import QuestionFeedContainer from './question_feed_container';
import SideBarContainer from './side_bar_container';
import { requestFeedDataWithPage } from '../../actions/feed_actions';
import { connect } from 'react-redux';

class Content extends React.Component{
  constructor(props){
    super(props);
    this.atTheEndOfThePage = this.atTheEndOfThePage.bind(this);
    this.lastCall = 0;
    this.state = {
      page: 1,
    };
  }

  atTheEndOfThePage(){
    const that = this;
    $(window).scroll(function () {
      if (($(window).scrollTop() >= $(document).height() - $(window).height() - 10) &&( Date.now() > (that.lastCall + 1000) )) {
        const nextPage = that.state.page + 1;
        console.log(nextPage);
        that.props.requestFeedDataWithPage(nextPage);
        that.setState({
          page: nextPage,
          });
        that.lastCall = Date.now();
      }
    });
  }

  render(){

    return (
      <div>
        {this.atTheEndOfThePage()}
        <div className="content">
          <SideBarContainer />
          <QuestionFeedContainer />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state, ownProps) => {
  return{
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    requestFeedDataWithPage: (page) => dispatch(requestFeedDataWithPage(page)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Content));



// <section class="content-sidebar">
//
// </section>
// <section class="content-main">
//
// </section>
