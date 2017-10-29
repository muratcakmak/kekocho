import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from '../greeting/greeting_container';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update (field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state );
    this.props.login(user);
  }
  handleDemoLogin(e){
    e.preventDefault();
    const demoUser = {
      email: "oguzhanmc@gmail.com",
      password: "password"
    };
    this.setState(demoUser);

    this.props.login(demoUser);
  }

  render(){
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = '/'+formType;
    const errors = this.props.errors.map((error) => {
      console.log(error);
      return <li key={error}>{error}</li>;
      });
      return (
        <div>
          <div className="bg_container">
            <div className="bg_image"></div>
          </div>
          <div className="login-form-container">
            <h1 className="logo" >Kekocho</h1>
            <h2 className="tagline">A place to share knowledge and better understand the world</h2>
            <div className="content-inner">
              <div className="signup-login">
                <div className="signup">
                  <div className="signup-explanation">
                    <Link to="/signup">Continue With Email</Link>. By signing up you indicate that you have read and agree to the Terms of Service and Privacy Policy.</div>
                </div>
                <div className="login">
                  <div className="form-container">
                    <h1>{this.props.formType}</h1>
                    <h2 value={formType}><Link to={route}></Link></h2>
                    <form className="login-form" onSubmit={this.handleSubmit}>
                      <div className="login-form-inputs">
                        <label><input type={'email'} placeholder={"Email"} onChange={this.update("email")} /> </label>
                        <label><input type={'password'} placeholder={"Password"} onChange={this.update("password")} /> </label>
                        <input type="submit" value={this.props.formType} className="session-submit-button"/>
                        <input type="submit" onClick={this.handleDemoLogin} value={"Demo Login"} className="session-submit-button"/>
                      </div>
                    </form>
                    <div className={ this.props.errors.length > 0 ? "error-style" : "" }>
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

  export default withRouter(LoginForm);



  // <GreetingContainer />
