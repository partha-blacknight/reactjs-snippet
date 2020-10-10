import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './screens/home';
import Features from './screens/features';
import Course from './screens/course';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/features" component={Features} />
          <Route path="/course" component={Course} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
