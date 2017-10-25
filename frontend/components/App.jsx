import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './navbar/nav_bar_container';

import { AuthRoute } from '../util/route_util';

const App = () => {
  return(
    <div>
      <div className="session-form-container">
        <header>
          <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/" component={NavBarContainer} />
      </div>
    </div>
  );
};

export default App;
