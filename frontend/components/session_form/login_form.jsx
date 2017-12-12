import React from 'react';
import { connect } from 'react-redux';
import Typed from 'typed.js';
import { Link, withRouter } from 'react-router-dom';
import SignupForm from './signup_form';
import { login, receiveErrors } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showSignup: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
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
    this.props.login(user);
  }
  handleDemoLogin(e) {
    e.preventDefault();
    new Typed('#login', {
      strings: ['oguzhanmc@gmail.com'],
      typeSpeed: 30,
    });

    setTimeout(() => {
      new Typed('#password', {
        strings: ['password'],
        typeSpeed: 30,
      });
    }, 1000);

    const demoUser = {
      email: 'oguzhanmc@gmail.com',
      password: 'password',
    };
    this.setState(demoUser);
    setTimeout(() => this.props.login(demoUser), 2100);
  }

  toggleSignup() {
    const toggledSignup = !this.state.showSignup;
    this.setState({ showSignup: toggledSignup });
  }

  render() {
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = `/${formType}`;
    const errors = this.props.errors.map(error => <li key={error}>{error}</li>);
    const { showSignup } = this.state;
    return (
      <div>
        <div className="bg_container">
          <div className="bg_image" />
        </div>
        <div className="login-form-container">
          <h1 className="logo" >Kekocho</h1>
          <h2 className="tagline">A place to share knowledge and better understand the world</h2>
          <div className="content-inner">
            <div className="signup-login">
              <div className="signup">
                <div className="signup-explanation">
                  <div className={!showSignup ? 'hidden-signup' : ''}>
                    <SignupForm cancel={() => this.toggleSignup()} />
                  </div>
                  <div className={showSignup ? 'hidden-signup' : ''} >
                    <a onClick={this.toggleSignup}>Continue With Email.</a> By signing up you indicate that you have read and agree to the Terms of Service and Privacy Policy.
                  </div>
                </div>

              </div>
              <div className="login">
                <div className="form-container">
                  <div className="session-title">{this.props.formType}</div>
                  <h2 value={formType}><Link to={route} /></h2>
                  <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="login-form-inputs">
                      <label><input id="login" className="session-input session-email-password" type="email" placeholder="Email" onChange={this.update('email')} /> </label>
                      <label><input id="password" className="session-input session-email-password" type="password" placeholder="Password" onChange={this.update('password')} /> </label>
                      <div className="session-form-actions">
                        <a>Forgot Password?</a>
                        <input type="submit" value={this.props.formType} className="session-submit-button login-signup-button" />
                      </div>
                      <input type="submit" onClick={this.handleDemoLogin} value="Demo Login" className="session-submit-button" />
                    </div>
                  </form>
                  <div className={this.props.errors.length > 0 ? 'error-style' : ''}>
                    {errors}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="inspired">Inspired by Quora. Made by Oguzhan Cakmak</h3>

          <div className="footer-nav">
            <ul className="nav-list">
              <li className="linkedin"><a href="https://www.linkedin.com/in/omuratcakmak/">LinkedIn</a></li>
              <li className="github"><a href="https://github.com/muratcakmak">Github</a></li>
              <li className="personal-page"><a href="/business">Personal Page</a></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loggedIn: !!state.current_user,
  errors: state.errors.session,
  formType: 'Login',
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([])),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginForm));
