import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SessionForm from './session_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  let props = {
    loggedIn: state.current_user ? true : false,
    errors: state.errors,
    formType: "login"
  };
  if(ownProps.location.pathname === '/signup'){
    props.formType = 'signup';
  }
  return props;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  let action = ownProps.location.pathname === "/signup" ? signup : login;
  return {
    processForm: (user) => dispatch(action(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm));
