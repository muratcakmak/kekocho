import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
    this.props.processForm(user);
  }

  render(){
    const formType = this.props.formType === 'signup' ? 'login' : 'signup';
    const route = '/'+formType;
    return (
      <div>
        <h1>{this.props.formType}</h1>
        <h2 value={formType}><Link to={route}></Link></h2>
        <form onSubmit={this.handleSubmit}>
          <label>Username: <input type={'text'} onChange={this.update("username")} /> </label>
          <label>Password:<input type={'password'} onChange={this.update("password")} /> </label>
          <input type="submit" value={this.props.formType}/>
        </form>
        <p value={this.props.errors}></p>
      </div>
        );
      }

    }

    export default withRouter(SessionForm);
