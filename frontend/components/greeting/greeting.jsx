import React from 'react';
import { Link } from 'react-router-dom';
class Greeting extends React.Component{

  render(){

    const currentUser = this.props.currentUser;
    if (currentUser) {
      return(
        <div>
          <h1>Welcome {currentUser.username}!</h1>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      );
    }else{
      return(
        <div>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up!</Link>
        </div>
      );
    }
  }

}

export default Greeting;
