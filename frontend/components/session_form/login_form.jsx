import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update (field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state );
    this.props.login(user);
  }

  render(){
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = '/'+formType;
    const errors = this.props.errors.map((error) => (
      <li>{error}</li>
    ));
    return (
      <div className="form-container">
        <h1>{this.props.formType}</h1>
        <h2 value={formType}><Link to={route}></Link></h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="session-form-inputs">
            {errors}
            <label><input type={'text'} placeholder={"Email"} onChange={this.update("email")} /> </label>
            <label><input type={'password'} placeholder={"Password"} onChange={this.update("password")} /> </label>
            <input type="submit" value={this.props.formType} className="session-submit-button"/>
          </div>
        </form>
        <p value={this.props.errors}></p>
      </div>
    );
  }

}

export default withRouter(LoginForm);
