import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import ClassList from './components/ClassList';
import Lecture from './components/Lecture';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/classes" component={ClassList} />
        <Route path="/classes/:id/lectures" component={Lecture} />
      </Switch>
    </Router>
  );
}

export default App;
