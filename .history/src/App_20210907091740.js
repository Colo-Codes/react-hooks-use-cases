import classes from './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import UseCaseUseState from './components/UseCaseUseState/UseCaseUseState';
import Navbar from './components/Navbar/Navbar';
import UseCaseStateManagement from './components/UseCaseUseState/UseCaseStateManagement/UseCaseStateManagement';

function App() {
  return (
    <Router className={classes.main}>
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
      </Switch>
    </Router>
  );
};

export default App;
