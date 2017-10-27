import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import Content from './content/content';
import AskQuestionModalContainer from './modal/ask_question_modal_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
// className="session-form-container"
const App = () => {

  return(
    <div>
      <AskQuestionModalContainer />
      <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={Content} />
      </Switch>
    </div>
      );
    };

    export default App;
