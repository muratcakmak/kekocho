import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SignupForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
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
    this.props.signup(user);
  }

  render(){
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = '/'+formType;
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <h2 value={formType}><Link to={route}></Link></h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="session-form-inputs">
            <label><input type={'text'} placeholder={"First name"} onChange={this.update("first_name")} /> </label>
            <label><input type={'text'} placeholder={"Last name"} onChange={this.update("last_name")} /> </label>
            <label><input type={'text'} placeholder={"Email"} onChange={this.update("email")} /> </label>
            <label><input type={'password'} placeholder={"Password"} onChange={this.update("password")} /> </label>
            <input type="submit" value={this.props.formType}/>
          </div>
        </form>
        <p value={this.props.errors}></p>
      </div>
    );
  }

}

export default withRouter(SignupForm);
