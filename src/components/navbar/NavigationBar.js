import React from 'react';
import './navbar.css';

function NavigationBar() {
  return (
    <nav>
      <div className="logo">
        <span>Math Magicians</span>
      </div>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/calculator">Calculator</a>
        </li>
        <li>
          <a href="/qoute">Qoute</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
