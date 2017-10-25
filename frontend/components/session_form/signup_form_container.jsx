import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import SignupForm from './signup_form';
import { signup, receiveErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.current_user ? true : false,
    errors: state.errors.session,
    formType: 'Signup'
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: (user) => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm));
