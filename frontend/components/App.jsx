import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import LoginForm from './session_form/login_form';
import SignupForm from './session_form/signup_form';
import NavBarContainer from './navbar/nav_bar_container';
import Content from './content/content';
import QuestionShowContainer from './question_show/question_show_container';
import ModalContainer from './modal/modal_container';
import SearchResultContainer from '../components/search_bar/search_result_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <ProtectedRoute path="/" component={NavBarContainer} />
    <ModalContainer />
    <Switch>
      <Route path="/search" component={SearchResultContainer} />
      <Route exact path="/topics/:topicId" component={Content} />
      <Route path="/answers" component={Content} />
      <AuthRoute path="/login" component={LoginForm} />
      <AuthRoute path="/signup" component={SignupForm} />
      <ProtectedRoute exact path="/" component={Content} />
      <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
    </Switch>
  </div>
);

export default withRouter(App);
