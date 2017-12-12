import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup, receiveErrors } from '../../actions/session_actions';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({ [field]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  toggleSignup() {
    this.props.cancel();
  }


  render() {
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = `/${formType}`;
    const errors = this.props.errors.map(error => (
      <li>{error}</li>
    ));
    return (
      <div>
        <div className="signup-form-container">
          <div className="session-title">{formType}</div>
          <h2 value={formType}><Link to={route} /></h2>
          <form className="session-form" onSubmit={this.handleSubmit}>
            <div className="session-form-inputs">
              <div className="session-first-last-name">

                <div className="signup-name-half">
                  <label>FIRST NAME</label>
                  <input className="session-input" type="text" onChange={this.update('first_name')} />
                </div>

                <div className="signup-name-half">
                  <label>LAST NAME</label>
                  <input className="session-input" type="text" onChange={this.update('last_name')} />
                </div>

              </div>

              <div className="signup-name-half">
                <label>EMAIL</label>
                <input className="session-input session-email-password" type="email" onChange={this.update('email')} />
              </div>

              <div className="signup-name-half">
                <label>PASSWORD</label>
                <input className="session-input session-email-password" type="password" onChange={this.update('password')} />
              </div>

              <div>
                By clicking "Sign Up" you indicate that you have read and agree to the Terms of Service and Privacy Policy.
              </div>
              <div className="session-form-actions">
                <a onClick={this.toggleSignup}>Cancel</a>
                <input type="submit" value={formType} className="session-submit-button login-signup-button" />
              </div>
            </div>
          </form>
          <div className={this.props.errors.length > 0 ? 'error-style' : ''}>
            {errors}
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  loggedIn: !!state.current_user,
  errors: state.errors.session,
  formType: 'Signup',
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignupForm));
