import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginForm from '../components/session_form/login_form';
import SignupForm from '../components/session_form/signup_form';
import NavBarContainer from '../components/navbar/nav_bar_container';
import Container from '../components/feed/container';
import QuestionShow from '../components/entity_show/question_show';
import Modal from '../components/modal/modal';
import { AuthRoute, ProtectedRoute } from './utils';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <Modal />
    <Switch>
      <Route exact path="/topics/:topicId" component={Container} />
      <Route path="/answers" component={Container} />
      <AuthRoute path="/login" component={LoginForm} />
      <AuthRoute path="/signup" component={SignupForm} />
      <ProtectedRoute exact path="/" component={Container} />
      <Route exact path="/questions/:questionId" component={QuestionShow} />
    </Switch>
  </div>
);

export default withRouter(App);
