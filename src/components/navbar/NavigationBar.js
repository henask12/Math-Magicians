import React from 'react';
import './navbar.css';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import Homepage from '../home';
import Calculator from '../Calculator';
import Quote from '../Quote';

function NavigationBar() {
  return (
    <Router>
      <nav className="bg-gray-800 py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="logo">
            <span className="text-white font-bold text-xl">Math Magicians</span>
          </div>
          <ul className="flex space-x-4 text-white font-bold">
            <li>
              <Link to="/" className="text-white hover:text-teal-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/calculator" className="text-white hover:text-teal-200">
                Calculator
              </Link>
            </li>
            <li>
              <Link to="/quote" className="text-white hover:text-teal-200">
                Quote
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/calculator" element={<Calculator />} />
        <Route exact path="/quote" element={<Quote />} />
      </Routes>
    </Router>
  );
}

export default NavigationBar;
