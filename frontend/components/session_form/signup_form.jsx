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

  componentWillUnmount(){
    this.props.clearErrors();
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
    const errors = this.props.errors.map((error) => (
      <li>{error}</li>
    ));
    return (
      <div>
      <h1 className="logo" >Kekocho</h1>
      <div className="form-container">
        <h1>{this.props.formType}</h1>
        <h2 value={formType}><Link to={route}></Link></h2>
        <form className="session-form" onSubmit={this.handleSubmit}>
          <div className="session-form-inputs">
            {errors}
            <label><input type={'text'} placeholder={"First name"} onChange={this.update("first_name")} /> </label>
            <label><input type={'text'} placeholder={"Last name"} onChange={this.update("last_name")} /> </label>
            <label><input type={'text'} placeholder={"Email"} onChange={this.update("email")} /> </label>
            <label><input type={'password'} placeholder={"Password"} onChange={this.update("password")} /> </label>
            <input type="submit" value={this.props.formType} className="session-submit-button"/>
          </div>
        </form>
        <p value={this.props.errors}></p>
      </div>
    </div>
    );
  }

}

export default withRouter(SignupForm);
