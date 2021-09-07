import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import UseCaseUseState from './components/UseCaseUseState/UseCaseUseState';
import Navbar from './components/Navbar/Navbar';
import UseCaseStateManagement from './components/UseCaseUseState/UseCaseStateManagement';
import UseCaseConditionalRender from './components/UseCaseUseState/UseCaseConditionalRender';
import UseCaseToggle from './components/UseCaseUseState/UseCaseToggle';
import UseCaseCounter from './components/UseCaseUseState/UseCaseCounter';
import UseCaseApi from './components/UseCaseUseState/UseCaseApi';

function App() {
  return (
    <div className={classes.main}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/usestate">
            <UseCaseUseState />
          </Route>
          <Route path="/usestate/state-management">
            <UseCaseStateManagement />
          </Route>
          <Route path="/usestate/conditional-rendering">
            <UseCaseConditionalRender />
          </Route>
          <Route path="/usestate/toggle">
            <UseCaseToggle />
          </Route>
          <Route path="/usestate/counter">
            <UseCaseCounter />
          </Route>
          <Route path="/usestate/api">
            <UseCaseApi />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
