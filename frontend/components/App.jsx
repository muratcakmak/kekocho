import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import NavBarContainer from './navbar/nav_bar_container';
import Content from './content/content';
import QuestionShowContainer from './question_show/question_show_container';
import ModalContainer from './modal/modal_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
const App = (props) => {
  return(
    <div>
      <ProtectedRoute path="/" component={NavBarContainer} />
          <ModalContainer />
    <Switch>
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/" component={Content} />
        <Route exact path="/api/questions/:questionId" component={QuestionShowContainer}/>
        <Route path="/" render={() => <Redirect to="/"/>} />
      </Switch>
    </div>
  );
};

export default withRouter(App);
