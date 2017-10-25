import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LoginForm from './login_form';
import { login, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.current_user ? true : false,
    errors: state.errors,
    formType: "Login"
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (user) => dispatch(login(user)),
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm));
