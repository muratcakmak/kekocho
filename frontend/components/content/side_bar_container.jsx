import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SideBar from './side_bar';

const mapStateToProps = (state, ownProps) => {
  return{
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
