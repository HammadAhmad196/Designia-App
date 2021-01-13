import React from 'react';
import Portfolio from './component/Portfolio';
import Skills from './component/Skills';
import Contact from './component/Contact';
import Header from './component/Header';
import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';


export default class App extends React.Component {
  render() {
    return (
        <Router>
          <div className="App">
            <Switch>
              <Route path={"/"} exact component={Header} />
              <Route path={"/skills"} component={Skills} />
              <Route path={"/portfolio"} component={Portfolio} />
              <Route path={"/contact"} component={Contact} />
              <Redirect to='/'></Redirect>
            </Switch>
          </div>
        </Router>
    );
  }
}

