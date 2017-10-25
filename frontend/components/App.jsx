import React from 'react';
import { Route } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';
import { AuthRoute } from '../util/route_util';


const App = () => {
  return(
    <div>
      <div className="session-form-container">
        <header>
          <h1 className="logo" >Kekocho</h1>
          <GreetingContainer />
        </header>
        <AuthRoute path="/login" component={SessionFormContainer} />
        <AuthRoute path="/signup" component={SessionFormContainer} />
      </div>
    </div>
  );
};

export default App;
