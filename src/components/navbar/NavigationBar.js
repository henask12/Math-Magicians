import React from 'react';
import './navbar.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <Router>
      <nav>
        <div className="logo">
          <span>Math Magicians</span>
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/qoute">Qoute</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/' Component={} />
        <Route exact path='/' Component={} />
        <Route exact path='/' Component={} />
      </Switch>
    </Router>
  );
}

export default NavigationBar;
