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
import UseCaseUseReducer from './components/UseCaseUseReducer/UseCaseUseReducer';
import UseCaseMultipleStates from './components/UseCaseUseReducer/UseCaseMultipleStates';
import UseCaseComplexStates from './components/UseCaseUseReducer/UseCaseComplexStates';
import UseCaseFetchApi from './components/UseCaseUseEffect/UseCaseFetchApi';
import UseCaseUseEffect from './components/UseCaseUseEffect/UseCaseUseEffect';
import UseCaseInputValidation from './components/UseCaseUseEffect/UseCaseInputValidation';
import UseCaseLiveFilter from './components/UseCaseUseEffect/UseCaseLiveFilter';
import UseCaseAnimation from './components/UseCaseUseEffect/UseCaseAnimation';

function App() {
  return (
    <div className={classes.main}>
      <h1>React hooks use cases</h1>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/usestate">
            <UseCaseUseState />
          </Route>
          <Route exact path="/usestate/state-management">
            <UseCaseStateManagement />
          </Route>
          <Route exact path="/usestate/conditional-rendering">
            <UseCaseConditionalRender />
          </Route>
          <Route exact path="/usestate/toggle">
            <UseCaseToggle />
          </Route>
          <Route exact path="/usestate/counter">
            <UseCaseCounter />
          </Route>
          <Route exact path="/usestate/api">
            <UseCaseApi />
          </Route>
          <Route exact path="/usereducer">
            <UseCaseUseReducer />
          </Route>
          <Route exact path="/usereducer/multiple-states">
            <UseCaseMultipleStates />
          </Route>
          <Route exact path="/usereducer/complex-states">
            <UseCaseComplexStates />
          </Route>
          <Route exact path="/useeffect">
            <UseCaseUseEffect />
          </Route>
          <Route exact path="/useeffect/fetch-api">
            <UseCaseFetchApi />
          </Route>
          <Route exact path="/useeffect/input-validation">
            <UseCaseInputValidation />
          </Route>
          <Route exact path="/useeffect/live-filter">
            <UseCaseLiveFilter />
          </Route>
          <Route exact path="/useeffect/animation">
            <UseCaseAnimation />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
