import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Components 
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../components/login/LoginScreen';

const AppRouter = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/login" component={ LoginScreen }/>
            <Route exact path="/" component={ LoginScreen }/>
          </Switch>
        </div>
      </Router> 
    </>
  )
}

export default AppRouter
