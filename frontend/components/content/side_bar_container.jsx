import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) =>{
  return {
    topics: Object.values(state.entities.userTopics)
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
