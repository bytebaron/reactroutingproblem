import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Controller from './Controller'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/table/:val1?/:val2?/:val3?" render={(props, params) => <Controller {...props}/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
