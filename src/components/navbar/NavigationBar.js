import React from 'react';

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
          <a href="/about">Calculator</a>
        </li>
        <li>
          <a href="/services">Qoute</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
