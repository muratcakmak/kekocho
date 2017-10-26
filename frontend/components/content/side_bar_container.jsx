import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) =>{
  if(state.session.hasOwnProperty("currentUser") && state.session.currentUser && state.session.currentUser.hasOwnProperty("topics") ){
    return {
      topics: state.session.currentUser.topics
    };
  }
  return {
    topics: []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar));
