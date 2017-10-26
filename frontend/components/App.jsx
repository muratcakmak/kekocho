import React from 'react';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './navbar/nav_bar_container';

import { AuthRoute } from '../util/route_util';
// className="session-form-container"
const App = () => {
  return(
    <div>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route exact path="/feed" component={NavBarContainer} />
    </div>
  );
};

export default App;
