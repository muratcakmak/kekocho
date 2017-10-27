import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Greeting extends React.Component{

  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(){
    this.props.logout().then(() => this.props.history.push('/login'));
  }

  render(){
    const currentUser = this.props.currentUser;
    if (currentUser) {
      return(
        <div>
          <h1>Welcome {currentUser.email}!</h1>
          <button className="session-submit-button" onClick={this.logout}>Logout</button>
        </div>
      );
    }else{
      return(
        <div className="greeting">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up!</Link>
        </div>
      );
    }
  }

}

export default withRouter(Greeting);
