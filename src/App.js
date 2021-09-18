import classes from './App.module.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import UseCaseStateManagement from './components/UseCaseUseState/UseCaseStateManagement';
import UseCaseConditionalRender from './components/UseCaseUseState/UseCaseConditionalRender';
import UseCaseToggle from './components/UseCaseUseState/UseCaseToggle';
import UseCaseCounter from './components/UseCaseUseState/UseCaseCounter';
import UseCaseApi from './components/UseCaseUseState/UseCaseApi';
import UseCaseMultipleStates from './components/UseCaseUseReducer/UseCaseMultipleStates';
import UseCaseComplexStates from './components/UseCaseUseReducer/UseCaseComplexStates';
import UseCaseFetchApi from './components/UseCaseUseEffect/UseCaseFetchApi';
import UseCaseInputValidation from './components/UseCaseUseEffect/UseCaseInputValidation';
import UseCaseLiveFilter from './components/UseCaseUseEffect/UseCaseLiveFilter';
import UseCaseAnimation from './components/UseCaseUseEffect/UseCaseAnimation';
import UseCaseUpdateData from './components/UseCaseUseEffect/UseCaseUpdateData';
import UseCaseUpdateApi from './components/UseCaseUseEffect/UseCaseUpdateApi';
import UseCaseSort from './components/UseCaseUseMemo/UseCaseSort';
import UseCaseInitialValue from './components/UseCaseUseMemo/UseCaseInitialValue';

function App() {
  return (
    <div className={classes.main}>
      <h1>React hooks use cases</h1>
      <hr />
      <Router>
        <Navbar />
        <hr />
        <Switch>
          <Route exact path="/">
            <div className={classes.centered}>
              <Home />
            </div>
          </Route>
          <Route exact path="/usestate/state-management">
            <div className={classes.centered}>
              <UseCaseStateManagement />
            </div>
          </Route>
          <Route exact path="/usestate/conditional-rendering">
            <div className={classes.centered}>
              <UseCaseConditionalRender />
            </div>
          </Route>
          <Route exact path="/usestate/toggle">
            <div className={classes.centered}>
              <UseCaseToggle />
            </div>
          </Route>
          <Route exact path="/usestate/counter">
            <div className={classes.centered}>
              <UseCaseCounter />
            </div>
          </Route>
          <Route exact path="/usestate/api">
            <div className={classes.centered}>
              <UseCaseApi />
            </div>
          </Route>
          <Route exact path="/usereducer/multiple-states">
            <div className={classes.centered}>
              <UseCaseMultipleStates />
            </div>
          </Route>
          <Route exact path="/usereducer/complex-states">
            <div className={classes.centered}>
              <UseCaseComplexStates />
            </div>
          </Route>
          <Route exact path="/useeffect/fetch-api">
            <div className={classes.centered}>
              <UseCaseFetchApi />
            </div>
          </Route>
          <Route exact path="/useeffect/input-validation">
            <div className={classes.centered}>
              <UseCaseInputValidation />
            </div>
          </Route>
          <Route exact path="/useeffect/live-filter">
            <div className={classes.centered}>
              <UseCaseLiveFilter />
            </div>
          </Route>
          <Route exact path="/useeffect/animation">
            <div className={classes.centered}>
              <UseCaseAnimation />
            </div>
          </Route>
          <Route exact path="/useeffect/update-data">
            <div className={classes.centered}>
              <UseCaseUpdateData />
            </div>
          </Route>
          <Route exact path="/useeffect/update-api">
            <div className={classes.centered}>
              <UseCaseUpdateApi />
            </div>
          </Route>
          <Route exact path="/usememo/sort">
            <div className={classes.centered}>
              <UseCaseSort />
            </div>
          </Route>
          <Route exact path="/usememo/initial-value">
            <div className={classes.centered}>
              <UseCaseInitialValue />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
